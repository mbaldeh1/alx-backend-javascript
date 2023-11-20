/**
 * Task 5. more complex HTTP server using Node's HTTP module
 */

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const dbPath = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const dataLines = data.trim().split('\n');
      const csStudents = dataLines
        .filter((line) => line.includes('CS'))
        .map((line) => line.substring(0, line.indexOf(',')));
      const sweStudents = dataLines
        .filter((line) => line.includes('SWE'))
        .map((line) => line.substring(0, line.indexOf(',')));

      const studentObject = {
        cs: csStudents,
        swe: sweStudents,
      };
      resolve(studentObject);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(dbPath)
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students
Number of students: ${data.cs.length + data.swe.length}
Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}
Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}`);
      })
      .catch((error) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${error instanceof Error ? error.message : error.toString()}`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Not found');
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}\n`);
});

module.exports = app;

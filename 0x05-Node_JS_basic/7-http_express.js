/**
 * Task 7. create a more complex HTTP server using Express
 */

const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 1245;
const dbPath = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
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

      resolve([csStudents, sweStudents]);
    }
  });
});

app.get('/', (__, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbPath)
    .then((data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students
Number of students: ${data[0].length + data[1].length}
Number of students in CS: ${data[0].length}. List: ${data[0].join(', ')}
Number of students in SWE: ${data[1].length}. List: ${data[1].join(', ')}`);
    })
    .catch((error) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${error.message}`);
    });
});

app.listen(PORT, () => {
  console.log(`************HTTP server listening on port ${PORT}************`);
});

module.exports = app;

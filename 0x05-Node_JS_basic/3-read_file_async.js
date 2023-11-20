/**
 * Task 3. Reading a file synchronously with Node JS
 */

const fs = require('fs');

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

      console.log(`Number of students: ${dataLines.length - 1}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    }

    resolve();
  });
});

module.exports = countStudents;

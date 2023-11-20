/**
 * Task 2. Reading a file synchronously with Node JS
 */

const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const dataLines = fs
    .readFileSync(path, 'utf8')
    .toString('utf-8')
    .trim()
    .split('\n');
  console.log(dataLines);
  const csStudents = dataLines
    .filter((line) => line.includes('CS'))
    .map((line) => line.substring(0, line.indexOf(',')));
  const sweStudents = dataLines
    .filter((line) => line.includes('SWE'))
    .map((line) => line.substring(0, line.indexOf(',')));

  console.log(`Number of students: ${dataLines.length - 1}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
};

module.exports = countStudents;

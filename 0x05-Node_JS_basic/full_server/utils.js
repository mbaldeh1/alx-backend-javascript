import fs from 'fs';

/**
 * utils.js module
 */

const readDatabase = (dbPath) => new Promise((resolve, reject) => {
  if (!dbPath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(dbPath, 'utf-8', (err, data) => {
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

      const studentsArrayByField = {
        CS: csStudents,
        SWE: sweStudents,
      };
      resolve(studentsArrayByField);
    }
  });
});

module.exports = readDatabase;

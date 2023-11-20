/**
 * Task 6. HTTP server using Express module
 */

const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (__, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});

module.exports = app;

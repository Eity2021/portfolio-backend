const express = require('express');
const port = 3000;
const projects = require('./projects');

const app = express();

app.use(express.json());
app.use('/projects', projects);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

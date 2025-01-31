const cors = require('cors'); 
const express = require('express');
const projects = require('./projects');

const app = express();
app.use(cors());
const port = 3000;




app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, 
  })
);

app.use(express.json());

// Use projects route
app.use('/projects', projects);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

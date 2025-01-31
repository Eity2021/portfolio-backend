const cors = require('cors'); 
const express = require('express');
const projects = require('./projects');

app.use(cors());
const app = express();
const port = 3001;




app.use(
  cors({
    origin: "http://localhost:3001", 
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

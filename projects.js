const express = require('express');
const cors = require('cors'); 
const router = express.Router();
const projects = require('./projects.json');


router.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);


router.get('/', (req, res) => {
  res.json(projects);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(projects.filter((ele) => ele.id === parseInt(id)));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const projects = require('./projects.json');

// Get all the books
router.get('/', (req, res) => {
  res.json(projects);
});

// Get a specific book
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(projects.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  projects.push(body);
  res.json({ message: 'The book has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  projects.forEach((project, index) => {
    if (project.id === parseInt(id)) {
      projects[index] = body;
    }
  });
  res.json({ message: `The book with ID ${id} has been updated` });
  // res.json(books);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  projects.forEach((project, index) => {
    if (project.id === parseInt(id)) {
      projects.splice(index);
    }
  });
  res.json({ message: `Book with id #${id} has been deleted` });
});

module.exports = router;

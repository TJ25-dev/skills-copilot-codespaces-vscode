// Create web server with express
const express = require('express');
const app = express();

// Load comments from the JSON file
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Serve static files from the 'static' directory
app.use(express.static('static'));

// Use the JSON body parser middleware
app.use(express.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
  res.status(201).json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

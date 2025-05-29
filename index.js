// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = []; // Array to store books

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// PUT update book by id
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  books = books.map(book => (book.id == id ? updatedBook : book));
  res.json(updatedBook);
});

// DELETE book by id
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  books = books.filter(book => book.id != id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

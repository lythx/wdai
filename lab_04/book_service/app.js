const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');

const db = new Sequelize('sqlite::memory:');
const Book = db.define('Book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
db.sync()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/books", async (req, res) => {
  const books = await Book.findAll()
  res.send(books)
})

app.get("/api/books/:book", async (req, res) => {
  const book = await Book.findByPk(req.id).catch(err => err)
  if (book instanceof Error) {
    res.status(400).send("No such book")
    return 
  }
  res.send(book)
})

app.post("/api/books", async (req, res) => {
  const newBook = await Book.create(
    { title: req.body.title, author: req.body.author, year: req.body.year }
  ).catch(err => err)
  if (newBook instanceof Error) {
    res.status(400).send("Incorrect data in body")
    return
  }
  db.sync()
  res.send({ id: newBook.id })
})

app.delete("/api/books/:book", async (req, res) => {
  const book = await Book.deleteByPk(req.body.id).catch(err => err)
  if (book instanceof Error) {
    res.status(400).send("No such book")
    return
  }
  db.sync()
  res.send(200)
})


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(5001, () => {
  console.log("Book service started")
})

module.exports = app;

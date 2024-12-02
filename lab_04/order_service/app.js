const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const {validateAndParseToken} = require('./tokenService');

const app = express();
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});
const Order = db.define('Order', {
  userId : {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bookId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
db.sync()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/orders/:user", async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.params.user }})
  if (orders instanceof Error) {
    res.status(500)
    return 
  }
  res.send(orders)
})

app.post("/api/orders", async (req, res) => {
  const data = validateAndParseToken(req)
  if (data === false) {
    res.sendStatus(401)
    return
  }
  const bookExistsRes = await fetch(`http://127.0.0.1:5001/api/books/${req.body.bookId}`)
  if (bookExistsRes.status !== 200) {
    res.status(400).send('No such book')
    return
  }
  const newOrder = await Order.create(
    { userId: data.userId, bookId: req.body.bookId, quantity: req.body.quantity }
  ).catch(err => err)
  if (newOrder instanceof Error) {
    res.status(400).send("Incorrect data in body")
    return
  }
  db.sync()
  res.send({ id: newOrder.id })
})

app.delete("/api/orders/:order", async (req, res) => {
  if (!validateAndParseToken(req)) {
    res.sendStatus(401)
    return
  }
  const order = await Order.findByPk(req.params.order).catch(err => err)
  if (order instanceof Error || order === null) {
    res.status(400).send("No such order")
    return
  }
  order.destroy()
  db.sync()
  res.send(200)
})

app.patch("/api/orders/:order", async (req, res) => {
  if (!validateAndParseToken(req)) {
    res.sendStatus(401)
    return
  }
  const order = await Order.findByPk(req.params.order).catch(err => err)
  if (order instanceof Error || order === null) {
    res.status(400).send("No such order")
    return
  }
  order.update({ bookId: req.body.bookId, quantity: req.body.quantity })
  db.sync()
  res.sendStatus(200)
})

app.listen(5002, () => {
  console.log("Order service started")
})

module.exports = app;

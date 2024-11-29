const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const {validateAndParseToken} = require('./tokenService');

const app = express();
const db = new Sequelize('sqlite::memory:');
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
  const orders = await Order.findAll({ where: { userId: req.user }})
  if (orders instanceof Error) {
    res.status(500)
    return 
  }
  res.send(orders)
})

app.post("/api/orders", async (req, res) => {
  const data = validateAndParseToken(req)
  if (data === false) {
    res.status(401)
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
  if (validateAndParseToken(req) === false) {
    res.status(401)
    return
  }
  const order = await Order.deleteByPk(req.order).catch(err => err)
  if (order instanceof Error) {
    res.status(400).send("No such order")
    return
  }
  db.sync()
  res.send(200)
})

app.patch("/api/orders/:order", async (req, res) => {
  if (validateAndParseToken(req) === false) {
    res.status(401)
    return
  }
  const order = await Order.findByPk(req.order).catch(err => err)
  if (order instanceof Error) {
    res.status(400).send("No such order")
    return
  }
  order.update({ bookId: req.body.bookId, quantity: req.body.quantity })
  db.sync()
  res.send(200)
})

app.listen(5002, () => {
  console.log("Order service started")
})

module.exports = app;
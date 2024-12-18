const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const {generateToken} = require("./tokenService.js")

const app = express();
const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});
const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
db.sync()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post("/api/register", async (req, res) => {
  const newUser = await User.create(
    { email: req.body.email, password: req.body.password }
  ).catch(err => err)
  if (newUser instanceof Error) {
    res.status(400).send("Incorrect data in body")
    return
  }
  db.sync()
  res.send({ id: newUser.id })
})

app.post("/api/login", async (req, res) => {
  const user = await User.findOne(
    { where: { email: req.body.email, password: req.body.password } }
  ).catch(err => err)
  if (user instanceof Error || user === null) {
    res.status(400).send("No such user")
    return 
  }
  const token = generateToken(user.id)
  res.send(token)
})

app.listen(5003, () => {
  console.log("User service started")
})

module.exports = app;

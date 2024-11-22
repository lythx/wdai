const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/orders/:user", () => {

})

app.post("/api/orders", () => {
  
})

app.delete("/api/orders/:order", () => {
  
})

app.patch("/api/orders/:order", () => {
  
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5001, () => {
  console.log("Book service started")
})

module.exports = app;

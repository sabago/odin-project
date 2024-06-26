const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const contactRouter = require("./routes/contact");
const aboutRouter = require("./routes/about");

const app = express();
// const port = 3000;

// view engine setup
// eslint-disable-next-line no-undef
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
app.set('view engine', 'pug')

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  // next();
});

module.exports = app;

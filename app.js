var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//other requirements
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//Require
const user = require("./routes/user");
const staff = require("./routes/staff");
const role = require("./routes/role");
const inquiry = require("./routes/inquiry");
const providedip = require("./routes/providedip");
const plan = require("./routes/plan");
const dstnumber = require("./routes/dstnumber");
const cdrreport = require("./routes/cdrreport");
const cdrfetch = require("./routes/cdrfetch");
const agent = require("./routes/agent");
const chat = require("./routes/chat");
const billing = require("./routes/billing");
const paytm = require("./routes/paytm");
const payumoney = require("./routes/payumoney");
const systemdetails = require("./routes/systemdetails");
const pospaidplan = require("./routes/pospaidplan");



var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//Use
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", user);
app.use("/api", staff);
app.use("/api", role);
app.use("/api", inquiry);
app.use("/api", providedip);
app.use("/api", plan);
app.use("/api", dstnumber);
app.use("/api", cdrreport);
app.use("/api", cdrfetch);
app.use("/api", agent);
app.use("/api", chat);
app.use("/api", billing);
app.use("/api", paytm);
app.use("/api", systemdetails);
app.use("/api", payumoney);
app.use("/api", pospaidplan);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

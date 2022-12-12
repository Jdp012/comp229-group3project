const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoute = require('./routes/users')

const app = express();

//database setup

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

//routing
// app.use('/', indexRouter);
app.use('/api/v1/', userRoute);
// app.use('/survey-list',surveyRouter);

// catch 404 and forward to error handler

module.exports = app;

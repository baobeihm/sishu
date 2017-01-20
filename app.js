var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set header to allow cross origin requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// app.use bind a middleware to application, regardless of HTTP protocols
// app.get is a part of app routing.
app.use('/', index);
app.use('/users', users);

// Define error handle middleware functions
// Error handle middleware is defined last, after defining routes.
// catch 404 and forward to error handler
app.use(notFoundRoutesErrorHandler);

// error handler
app.use(renderErrorMessage);

function notFoundRoutesErrorHandler(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err)
}

function renderErrorMessage(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

module.exports = app;

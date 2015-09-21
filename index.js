var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();


//middleware for REST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//registering path
app.use('/hello', function(req, res, next) {
  res.send('Hello World!');
  next(); // allows to move to the next middleware. If not included, browser hangs
});

//connect to MongoDB
mongoose.connect('mongodb://localhost/trailer_review');
mongoose.connection.once('open', function() {
								
  console.log('Listening on port 3000...');
  app.listen(3000);
});
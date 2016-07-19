var express = require('express');
var index = require('./routes/index');
var pg = require('pg');
var app = express();

var config = {
  database: 'twitter_handle',
  port: 5432
};

var dbClient = new pg.Client(config);

app.use(express.static('public'));

app.use('/', index);

var server = app.listen(3000, handleServerStart);

function handleServerStart(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
}

// Status please?!

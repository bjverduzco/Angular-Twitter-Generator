var express = require('express');
var index = require('./routes/index');
var pg = require('pg');
var app = express();

var config = {
  database: 'twitter_handle',
  port: 5432
};


app.use(express.static('public'));

app.use('/', index);

app.get('/nouns', function(request, response){
  var client = new pg.Client(config);

  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('SELECT noun FROM nouns;', function(err, result){
      var nounList = {};
      console.log(result.rows);
      nounList = result.rows;
      if(err){
        console.log('Query error', err);
        response.sendStatus(500);
      } else {
        console.log('Great success', nounList);
        response.send(nounList);
        response.sendStatus(200);
      }

      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      })
    })
  })

})

app.get('/adjectives', function(request, response){
  var client = new pg.Client(config);

  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('SELECT adjective FROM adjectives;', function(err, result){
      var nounList = {};
      console.log(result.rows);
      nounList = result.rows;
      if(err){
        console.log('Query error', err);
        response.sendStatus(500);
      } else {
        console.log('Great success', nounList);
        response.send(nounList);
        response.sendStatus(200);
      }

      client.end(function(err){
        if(err){
          console.log('Disconnect error', err);
        }
      })
    })
  })

})

var server = app.listen(3000, handleServerStart);

function handleServerStart(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
}

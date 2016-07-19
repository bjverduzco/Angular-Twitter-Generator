var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response){
  var filePath = path.join(__dirname, '../public/views/index.html');
  console.log('Sending path ', filePath);
  response.sendFile(filePath);
})

module.exports = router;

// What is going on man?!

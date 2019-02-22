var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

//displays the index.hmtl when the '/' route is hit on the browser
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

//listens on port specified above for the call to the endpoint and opens if no error
app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

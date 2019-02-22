import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

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

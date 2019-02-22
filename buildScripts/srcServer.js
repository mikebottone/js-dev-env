import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

//bundles
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

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

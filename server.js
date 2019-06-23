const http = require('http');
const nodeStatic = require('node-static');
const file = new nodeStatic.Server('.', {
  cache: 0,
  headers: {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
});

http
  .createServer(function(req, res) {
    console.log(req.headers.cookie);
    file.serve(req, res);
  })
  .listen(3000);
  console.log('server running on 127.0.0.1:3000' )

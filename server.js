var express = require('express') 
var app = express(); 
var port = process.env.PORT || 3000; var routes = require('./api/routes'); 
routes(app); app.listen(port,function(){ console.log('Server started on port: ' + port); });
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
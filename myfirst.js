var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("I'm learning git day 1...");
}).listen(8080);

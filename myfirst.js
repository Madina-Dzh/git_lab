var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Cats will take over the world!');
}).listen(8080);
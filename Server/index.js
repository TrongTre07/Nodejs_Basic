var http = require('http');

const wibu = require('./wibu')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const result = wibu.tong(1,2)
  res.end(`Result: ${result}`);
}).listen(8888);

//http://localhost:8888/
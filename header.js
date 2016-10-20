var http = require("http");

http.createServer(function (req, res) {

  res.writeHead(200,{"Content-type": "application/json"})

  var json = {name: 'José', username: 'jmunoz'}
  res.write(JSON.stringify(json));
  
  res.end();

}).listen(3300)
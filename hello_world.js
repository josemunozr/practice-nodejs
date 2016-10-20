var http = require("http");

http.createServer(function (req, res) {
  console.log("Hello, World")
  res.end();
}).listen(3300)
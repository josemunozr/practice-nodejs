var http = require("http"),
    fs   = require("fs");


http.createServer(function (req, res) {
  fs.readFile("./index.html", function (err,file) {
    res.write(file);
    res.end();
  });
}).listen(3300)
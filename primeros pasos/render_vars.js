var http = require("http"),
  fs   = require("fs");

http.createServer(function (req, res) {

  fs.readFile("./index.html", function (err, html) {
    if (err) {
      res.writeHead(404,{"Content-type": "text/html"})
      res.end("404, Not Found");
    }else {
      res.writeHead(200,{"Content-type": "text/html"})
      
      var html_string = html.toString();

      var vars = html_string.match(/[^\{\}]+(?=\})/g);
      var name = "José M"

      vars.map(function (v, i) {
        var value = eval(v)

        html_string = html_string.replace("{"+ v +"}", value);
      })

      res.write(html_string);
      res.end();
    }
  })
  

}).listen(3300)
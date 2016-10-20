var http = require("http"),
  fs   = require("fs");

http.createServer(function (req, res) {

  if (req.url.indexOf("favicon.ico") > 0 ) return;

  fs.readFile("./index.html", function (err, html) {
    if (err) {
      res.writeHead(404,{"Content-type": "text/html"})
      res.end("404, Not Found");
    }else {
      res.writeHead(200,{"Content-type": "text/html"})
      
      var html_string = html.toString();
      var params = [];
      var obj_params = {};
      var vars = html_string.match(/[^\{\}]+(?=\})/g);
      
      if (req.url.indexOf("?") > 0){
        // ?nombre=Jose

        var url_data = req.url.split("?");
        params = url_data[1].split("&")
      }

      // desglose de parametros
      params.map(function (p, i) {
        // nombre=Jose
        var param_data = p.split("=");
        // [nombre,Jose]
        obj_params[param_data[0]] = param_data[1]
        // {nombre: Jose}
      })

      vars.map(function (v, i) {
        html_string = html_string.replace("{"+ v +"}", obj_params[v]);
      })

      res.write(html_string);
      res.end();
    }
  })
  

}).listen(3300)
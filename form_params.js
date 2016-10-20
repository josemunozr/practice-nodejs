var http = require("http"),
    fs   = require("fs"),
    params = require("./params_parse.js"),
    render = require("./render_view.js");


http.createServer(function (req, res) {

  if (req.url.indexOf("favicon.ico") > 0 ) return;

  fs.readFile("./index.html", function (err, html) {
    if (err) {
      res.writeHead(404,{"Content-type": "text/html"})
      res.end("404, Not Found");
    }else {
      res.writeHead(200,{"Content-type": "text/html"})
      
      var html_string = html.toString();
      var obj_params = params.getParams(req)
    

      res.write(render.renderView(html_string, obj_params));
      res.end();
    }
  })
  

}).listen(3300)
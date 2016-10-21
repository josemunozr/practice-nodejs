var express = require("express");

var app = express();

//define motor de vistas
app.set("view engine", "jade");

app.get("/", function (req, res) {
  //res.render("index");
  res.render("example-routing");
})

app.get("/:nombre", function (req, res) {
  res.render("form",{nombre: req.params.nombre});
})

app.post("/", function (req, res){
  res.render("form");
})

app.listen(9200)
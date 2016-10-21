var express = require("express");

var app = express();

//define motor de vistas
app.set("view engine", "jade");

app.get("/", function (req, res) {
  res.render("index", {vars: "Iteración"});
})

app.listen(9200)
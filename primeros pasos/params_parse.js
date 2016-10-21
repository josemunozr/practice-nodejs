function getParams(req) {
  var params = [];
  var obj_params = {};

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

  return obj_params;
}

module.exports.getParams = getParams;
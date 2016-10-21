function renderView(template, params) {
  var vars = template.match(/[^\{\}]+(?=\})/g);

  vars.map(function (v, i) {
    template = template.replace("{"+ v +"}", params[v]);
  })

  return template;
}

module.exports.renderView = renderView;
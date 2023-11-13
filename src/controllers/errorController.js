function error404(req, res) {
  res.status(404).render("error404",{title:"Error al cargar"});
};

function error500(req, res) {
  res.status(500).render("error500",{title:"Error al cargar"});
};

module.exports = {
  error404,
  error500
};
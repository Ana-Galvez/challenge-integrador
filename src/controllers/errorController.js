function error404(req, res) {
  res.status(404).render("error404",{title:"Error al cargar"});
};

function error500(req, res) {
  res.status(500).render("error500",{title:"Error al cargar"});
};

function error400(req, res) {
  res.status(400).render("error400",{title:"Recurso no encontrado"});
};

function error403(req, res) {
  res.status(403).render("error403",{title:"Acceso denegado"});
};

module.exports = {
  error404,
  error500,
  error400,
  error403
};
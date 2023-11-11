function error404(req, res) {
  res.status(404).send("<h1>Página no encontrada, verifique la dirección</h1>");
};

function error500(req, res) {
  res.status(500).send("<h1>Problemas con el servidor, intente más tarde</h1>");
};

module.exports = {
  error404,
  error500
};
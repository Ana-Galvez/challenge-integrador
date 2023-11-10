const authController = {
  login_get : (req,res)=>res.send("Ruta para ver la vista login"),
  login_post: (req,res)=> res.send("Ruta para hacer el login"),
  register_get: (req,res)=> res.send("Ruta para la vista registro"),
  register_post: (req,res)=>res.send("Ruta para hacer el registro"),
  logout : (req,res)=>res.send("Ruta para sacar el login")
}

module.exports = authController;
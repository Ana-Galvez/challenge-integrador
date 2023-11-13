const authController = {
  login_get : (req,res)=>res.render("login",{title:"LOGIN | FUNKOSHOP"}),
  login_post: (req,res)=> res.render("login",{title:"LOGIN | FUNKOSHOP"}),
  register_get: (req,res)=>res.render("register",{title:"REGISTRARSE| FUNKOSHOP"}),
  register_post: (req,res)=>res.render("register",{title:"REGISTRARSE | FUNKOSHOP"}),
  logout : (req,res)=>res.render("logout",{title:"CERRAR SESION | FUNKOSHOP"}),
}

module.exports = authController;
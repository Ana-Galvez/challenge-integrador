const user = require("../models/user.js");
const fs = require("fs");
const path = require("path");
const crypts = require('bcryptjs');

const authController = {
  login_get: (req, res) => res.render("login", { title: "LOGIN | FUNKOSHOP" }),

  login_post: async (req, res) => {
    const { mail, contrasena } = req.body;
    const [verificado] = await user.checkLogin(mail);
    console.log(verificado)
    if (verificado === undefined) {
      console.log("paso el login");
      res.redirect("register");
      console.log('llega')
    } else if (!(await crypts.compare(contrasena, verificado.password))) {
      console.log('contrasena' , contrasena)
      console.log(verificado.password)
      res.redirect("register");
    } else {
      console.log(verificado.user_id)
      req.session.userid = verificado.user_id;
      console.log(verificado.user_id)
      res.redirect("/admin");
    }
    //res.render("login", { title: "LOGIN | FUNKOSHOP" })
  },
  register_get: (req, res) =>
    res.render("register", { title: "REGISTRARSE| FUNKOSHOP" }),

  register_post: async (req, res) => {
    // const { nombre, apellido, mail, contrasena } = req.body;
    const usuarioNuevo = {
      name: req.body.nombre,
      lastname: req.body.apellido,
      email: req.body.mail,
      password: req.body.contrasena,
    };

    const creado = await user.crearUser(usuarioNuevo);

    if (creado !== undefined) {
      res.redirect("login");
    } else {
      res.redirect("register");
    }
  },

  // (req, res) => res.render("register", { title: "REGISTRARSE | FUNKOSHOP" }),
  
  logout: (req, res) =>
   // res.render("logout", { title: "CERRAR SESION | FUNKOSHOP" }),
   req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      res.status(500).send('Error al cerrar sesión');
    } else {
      // Redirige al usuario a la página de inicio o a donde desees después de cerrar sesión
      res.redirect('/');
    }
  })
};

module.exports = authController;

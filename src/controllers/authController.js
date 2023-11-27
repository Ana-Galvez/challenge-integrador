const user = require("../models/user.js");
const fs = require("fs");
const path = require("path");

const authController = {
  login_get: (req, res) => res.render("login", { title: "LOGIN | FUNKOSHOP" }),

  login_post: async (req, res) => {
    const { mail, contrasena } = req.body;
    const [verificado] = await user.checkLogin(mail, contrasena);
    if (verificado !== undefined) {
      console.log("paso el login");
      res.redirect("/home");
      //res.render("login", { title: "LOGIN | FUNKOSHOP" })
    } else {
      res.redirect("/?error=1");
    }
  },
  register_get: (req, res) =>
    res.render("register", { title: "REGISTRARSE| FUNKOSHOP" }),

  register_post: async (req, res) => {
    const usuarioNuevo = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mail: req.body.mail,
      contrasena: req.body.contrasena      
    } 
    const [creado] = await user.crearUser(usuarioNuevo );

    if (creado !== undefined) {
      console.log("paso la query");
    }
  },

  // (req, res) => res.render("register", { title: "REGISTRARSE | FUNKOSHOP" }),
  logout: (req, res) =>
    res.render("logout", { title: "CERRAR SESION | FUNKOSHOP" }),
};

module.exports = authController;

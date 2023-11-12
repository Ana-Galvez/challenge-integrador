let products = require("../../products.js");
const mainController = {
  home : (req,res)=>res.render("index",{title:"HOME | FUNKOSHOP",products}),
  contact : (req,res)=>res.render("contact",{title:"CONTACTO | FUNKOSHOP"}),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
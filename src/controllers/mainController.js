// let product = require("../../products.js");
const product={
  product_id:1,
  licence_name:"Pokemon",
  category_name:"Figuras coleccionables",
  product_name:"Pidgeotto Flying",
  product_description:"Figura Funko coleccionable de Pidgeotto de la saga Pokemon.",
  product_price:1799.99,
  dues:10,
  product_sku:"PKM001001",
  img_front:"/img/pokemon/pidgeotto-1.webp",
  img_back:"/img/pokemon/pidgeotto-box.webp"
}
const mainController = {
  home : (req,res)=>res.render("index",{title:"HOME | FUNKOSHOP",products:product}),
  contact : (req,res)=>res.render("contact",{title:"CONTACTO | FUNKOSHOP"}),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
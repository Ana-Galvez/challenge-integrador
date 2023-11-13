// let product = require("../../products.js");
const fs = require("fs");
const mainController = {
  home : async (req,res)=>{
    const fileJson = await fs.readFileSync("products.json");
    const product = await fileJson.json();
    res.render("index",{title:"HOME | FUNKOSHOP",products:product})},
  contact : (req,res)=>res.render("contact",{title:"CONTACTO | FUNKOSHOP"}),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
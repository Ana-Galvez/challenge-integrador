const modelos = require("../models/products.js");
const fs = require("fs");
const path = require("path");

const mainController = {
  home : async (req,res)=>{
    const allProducts = await modelos.getProducts()
    const allLicence = await modelos.getLicence()
    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    
    res.render("index",{title:"HOME | FUNKOSHOP",products:allProducts,licences:allLicence})},
  contact : (req,res)=>res.render("contact",{title:"CONTACTO | FUNKOSHOP"}),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
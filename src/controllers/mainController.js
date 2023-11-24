const fs = require("fs");
const path = require("path");
const mainController = {
  home : (req,res)=>{
    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    const {licence_id, licence_name, licence_description, licence_img} = req.body
    
    res.render("index",{title:"HOME | FUNKOSHOP",products:product})},
  contact : (req,res)=>res.render("contact",{title:"CONTACTO | FUNKOSHOP"}),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
const modelos = require('../models/products.js')
const fs = require("fs");
const path = require("path");

const shopController = {
   shop_get: async (req,res)=>{
      const allProducts = await modelos.getProducts()
      console.log(allProducts);
      // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
      // const product = JSON.parse(fileJson);
      res.render("shop",{title:"SHOP | FUNKOSHOP",products: allProducts})},
   itemId_get: (req, res) => {
      const id = req.params.id;
      const fileJson = fs.readFileSync(path.join(__dirname, "../../products.json"));
      const product = JSON.parse(fileJson);
      res.render("item", { title: "ITEM | FUNKOSHOP",products:product,id})},
   itemIdAdd_post: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   cart_get: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
   cart_post: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
}

module.exports = shopController
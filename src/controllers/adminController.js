const modelos = require('../models/products.js');
const fs = require("fs");
const path = require("path");


const adminController = {
    admin_get: async (req,res)=>{
        const allProducts = await modelos.getProducts()
        // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
        // const product = JSON.parse(fileJson);
        res.render("admin",{title:"ADMIN | FUNKOSHOP",products:allProducts})
    },
    create_get: (req,res)=>res.render("create",{title:"CREAR PRODUCTO | FUNKOSHOP"}),
    create_post: (req,res)=>res.render("create",{title:"CREAR PRODUCTO | FUNKOSHOP"}),
    editID_get: async (req, res) => {
        const id = req.params.id;
        const allProducts = await modelos.getProducts()
        // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
        // const product = JSON.parse(fileJson);
        res.render("edit", { title: "EDITAR PRODUCTO | FUNKOSHOP",products:allProducts,id })
    },
    editID_put: (req,res)=>{
        const id = req.params.id;
        const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
        const product = JSON.parse(fileJson);
        res.render("edit",{title:"EDITAR PRODUCTO| FUNKOSHOP",products:product,id})},
    editID_delete: (req,res)=>res.render("delete",{title:"BORRAR PRODUCTO | FUNKOSHOP"}),
}

module.exports = adminController    
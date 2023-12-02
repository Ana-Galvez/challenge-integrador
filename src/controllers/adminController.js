const modelos = require("../models/products.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const adminController = {
  admin_get: async (req, res) => {
    const allProducts = await modelos.getProducts();
    res.render("admin", { title: "ADMIN | FUNKOSHOP", products: allProducts });

    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    // res.render("admin",{title:"ADMIN | FUNKOSHOP",products:product})
  },
  create_get: async (req, res) => {
    const allLicences = await modelos.getLicence()
    const allCategories =await modelos.getCategories()
    res.render("create", { title: "CREAR| FUNKOSHOP",allLicences,allCategories})},

  create_post: async (req, res) => {
    const allProducts = await modelos.getProducts();
    const year = Date.now().toString;
    const data = {
      // category_name : req.body.categoria,
      // licence_name: req.body.licencia,
      product_name: req.body.nombre_producto,
      product_description: req.body.detalle_producto,
      sku: req.body.sku,
      price: req.body.precio,
      stock: req.body.stock,
      discount: req.body.descuento,
      dues: req.body.cuotas,
      image_front: req.body.imagenes,  //problema imagenes
      image_back: req.body.imagenes,
      create_time: year,
      licence_id: 1,//ver como poner
      category_id:1
    }
    const newProduct = await modelos.newProduct(data);
    res.render('admin',{ title: "ADMIN | FUNKOSHOP", products: allProducts,newProduct})
    // res.render("create", { title: "CREAR| FUNKOSHOP" })
  },
  editID_get: async (req, res) => {
    const id = req.params.id;
    const allProducts = await modelos.getProducts();
    const allLicences = await modelos.getLicence();
    const allCategories =await modelos.getCategories();
    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    res.render("edit", {
      title: "EDITAR| FUNKOSHOP",
      products: allProducts,
      allLicences,
      allCategories,
      id,
    });
  },
  editID_put: (req, res) => {
    const id = req.params.id;
    const fileJson = fs.readFileSync(
      path.join(__dirname, "../../products.json")
    );
    const product = JSON.parse(fileJson);
    res.render("edit", {
      title: "EDITAR PRODUCTO| FUNKOSHOP",
      products: product,
      id,
    });
    
  },
  deleteID_get: async (req, res) => {
    const id = req.params.id;
    const allProducts = await modelos.getProducts();

    res.render("delete", {
      title: "BORRAR | FUNKOSHOP",
      products: allProducts,
      id,
    });
  },

  deleteID_delete: async (req, res) => {
    const id = req.body.id

    const borrado = await modelos.deleteItem(id)
    if (borrado==!undefined) {
      res.redirect("/admin")
    }
   
  },
};

module.exports = adminController;

const modelos = require("../models/products.js");
const fs = require("fs");
const e = require("method-override");
const path = require("path");

const adminController = {
  admin_get: async (req, res) => {
    const allProducts = await modelos.getProducts();
    res.render("admin", { title: "ADMIN | FUNKOSHOP", products: allProducts });

    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    // res.render("admin",{title:"ADMIN | FUNKOSHOP",products:product})
  },
  create_get: async (req, res) => {
    const allLicences = await modelos.getLicence();
    const allCategories = await modelos.getCategories();
    res.render("create", {
      title: "CREAR| FUNKOSHOP",
      allLicences,
      allCategories,
    });
  },

  create_post: async (req, res) => {
    const allProducts = await modelos.getProducts();
    const allLicences = await modelos.getLicence();
    const allCategories = await modelos.getCategories();
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
      image_front: "/CAJA.jpg",
      image_back: "/FRENTE.jpg",
      create_time: year,
      licence_id: req.body.licencia,
      category_id: req.body.categoria,
    };
    console.log(data);
    const newProduct = await modelos.newProduct(data);
    res.render("create", {
      title: "PRODUCTO AGREGADO | FUNKOSHOP",
      products: allProducts,
      allLicences,
      allCategories,
      newProduct,
    });
    // res.render("create", { title: "CREAR| FUNKOSHOP" })
  },

  editID_get: async (req, res) => {
    const id = req.params.id;
    const allProducts = await modelos.getProducts();
    const allLicences = await modelos.getLicence();
    const allCategories = await modelos.getCategories();
    const year = Date.now().toString;
    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    res.render("edit", {
      title: "EDITAR| FUNKOSHOP",
      products: allProducts,
      allCategories,
      allLicences,
      id,
    });
  },
  editID_put: async (req, res) => {
    const id = req.params.id;
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
      image_front: "/CAJA.jpg",
      image_back: "/FRENTE.jpg",
      // image_front: "/" + req.files[0].filename,
      // image_back: "/" + req.files[1].filename,
      create_time: year,
      licence_id: req.body.licencia,
      category_id: req.body.categoria,
    };
    console.log(data);
    const editProduct = await modelos.editProduct(data, id);

    // res.render("edit", {
    //   title: "PRODUCTO MODIFICADO| FUNKOSHOP",
    //   products: allProducts,
    //   allCategories,
    //   allLicences,
    //   id,
    // });

    if (editProduct == !undefined) {
      res.redirect("/home");
    }else{
    res.redirect("/admin");
    }
  },

  deleteID_get: async (req, res) => {
    const id = req.params.id;
    const allProducts = await modelos.getProducts();
    const allLicences = await modelos.getLicence();
    const allCategories = await modelos.getCategories();

    res.render("delete", {
      title: "BORRAR | FUNKOSHOP",
      products: allProducts,
      allCategories,
      allLicences,
      id,
    });
  },

  deleteID_delete: async (req, res) => {
    const id = req.params.id;

    const borrado = await modelos.deleteItem(id);
    if (borrado == !undefined) {
      res.redirect("/admin");
    }else{
    res.redirect("/admin");
  }
},
}

module.exports = adminController;

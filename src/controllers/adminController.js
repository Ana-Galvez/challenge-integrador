const modelos = require("../models/products.js");
const fs = require("fs");
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
    const allLicences = await modelos.getLicence()
    const allCategories =await modelos.getCategories()
    res.render("create", { title: "CREAR| FUNKOSHOP",allLicences,allCategories})},

  create_post: (req, res) =>
    res.render("create", { title: "CREAR| FUNKOSHOP" }),

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
      allCategories,
      allLicences,
      id,
    });
  },
  editID_put: (req, res) => {
    //por el momento dejo esto para que no tire error, hasta llamar a la bbdd
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
    const allLicences = await modelos.getLicence();
    const allCategories =await modelos.getCategories();

    res.render("delete", {
      title: "BORRAR | FUNKOSHOP",
      products: allProducts,
      allCategories,
      allLicences,
      id,
    });
  },

  deleteID_delete: async (req, res) => {

    const id = req.params.id
    
    const borrado = await modelos.deleteItem(id)
    if (borrado==!undefined) {
      res.redirect("/admin")
    }
    res.redirect("/admin")
  },
};

module.exports = adminController;

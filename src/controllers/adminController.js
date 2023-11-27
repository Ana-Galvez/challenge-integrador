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
  create_get: (req, res) => res.render("create", { title: "CREAR| FUNKOSHOP" }),
  create_post: (req, res) =>
    res.render("create", { title: "CREAR| FUNKOSHOP" }),
  editID_get: async (req, res) => {
    const id = req.params.id;
    const allProducts = await modelos.getProducts();
    // const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
    // const product = JSON.parse(fileJson);
    res.render("edit", {
      title: "EDITAR| FUNKOSHOP",
      products: allProducts,
      id,
    });
  },
  editID_put: (req, res) => res.render("edit", { title: "EDITAR| FUNKOSHOP" }),
  editID_delete: (req, res) =>
    res.render("delete", { title: "BORRAR | FUNKOSHOP" }),
};

module.exports = adminController;

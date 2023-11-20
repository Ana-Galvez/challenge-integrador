const fs = require("fs");
const path = require("path");


const adminController = {
    admin_get: (req,res)=>{
        const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
        const product = JSON.parse(fileJson);
        res.render("admin",{title:"ADMIN | FUNKOSHOP",products:product})
    },
    create_get: (req,res)=>res.render("create",{title:"CREAR| FUNKOSHOP"}),
    create_post: (req,res)=>res.render("create",{title:"CREAR| FUNKOSHOP"}),
    editID_get: (req, res) => {
        const id = req.params.id;
        const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
        const product = JSON.parse(fileJson);
        res.render("edit", { title: "EDITAR| FUNKOSHOP",products:product,id })
    },
    editID_put: (req,res)=>res.render("edit",{title:"EDITAR| FUNKOSHOP"}),
    editID_delete: (req,res)=>res.render("delete",{title:"BORRAR | FUNKOSHOP"}),
}

module.exports = adminController    
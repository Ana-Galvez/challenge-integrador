const adminController = {
    admin_get: (req,res)=>res.render("admin",{title:"ADMIN | FUNKOSHOP"}),
    create_get: (req,res)=>res.render("create",{title:"CREAR| FUNKOSHOP"}),
    create_post: (req,res)=>res.render("create",{title:"CREAR| FUNKOSHOP"}),
    editID_get: (req,res)=>res.render("edit",{title:"EDITAR| FUNKOSHOP"}),
    editID_put: (req,res)=>res.render("create",{title:"EDITAR| FUNKOSHOP"}),
    editID_delete: (req,res)=>res.render("create",{title:"BORRAR | FUNKOSHOP"}),
}

module.exports = adminController    
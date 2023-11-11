const adminController = {
    admin_get: (req,res)=>res.send("Ruta para admin"),
    create_get: (req,res)=>res.send("Ruta para enviar solictud crear usuario"),
    create_post: (req,res)=>res.send("Ruta para impactar usuario creado admin"),
    editID_get: (req,res)=>res.send("Ruta para enviar edit ID"),
    editID_put: (req,res)=>res.send("Ruta para impactar edit ID"),
    editID_delete: (req,res)=>res.send("Ruta para borrar"),
}

module.exports = adminController
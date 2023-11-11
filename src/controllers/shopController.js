const shopController = {
   shop_get: (req,res)=>res.send("Ruta para entrar al shop"),
   itemId_get: (req,res)=>res.send("Ruta para ver el ID"),
   itemIdAdd_post: (req,res)=>res.send("Ruta para adicionar un ID"),
   cart_get: (req,res)=>res.send("Ruta para obtener el carrito"),
   cart_post: (req,res)=>res.send("Ruta para ver el carrito"),
}

module.exports = shopController    
const shopController = {
   shop_get: (req,res)=>res.send("Ruta para entrar al shop"),
   itemId_get: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),// lo que dice en title en el html que corresponda
   itemIdAdd_post: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   cart_get: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
   cart_post: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
}

module.exports = shopController
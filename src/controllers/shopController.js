const shopController = {
   shop_get: (req,res)=>res.render("shop",{title:"SHOP | FUNKOSHOP"}),
   itemId_get: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   itemIdAdd_post: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   cart_get: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
   cart_post: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
}

module.exports = shopController
//importar fs path



const shopController = {
   // FIJATE COMO PONER PARA QUE LEA EL JSON, EN MAINCONTROLLER O ADMINCONTROLLER
   //
   shop_get: (req,res)=>{
      const fileJson = fs.readFileSync(path.join(__dirname,"../../products.json"));
      const product = JSON.parse(fileJson);
      res.render("shop",{title:"SHOP | FUNKOSHOP",products:product})},
   itemId_get: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   itemIdAdd_post: (req,res)=>res.render("item",{title:"ITEM | FUNKOSHOP"}),
   cart_get: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
   cart_post: (req,res)=>res.render("cart",{title:"CARRITO | FUNKOSHOP"}),
}

module.exports = shopController
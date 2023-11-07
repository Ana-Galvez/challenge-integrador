const mainController = {
  home : (req,res)=>res.send("Ruta para la vista home"),
  contact : (req,res)=>res.send("Ruta para la vista contact"),
  about : (req,res)=>res.send("Ruta para la vista about"),
  faqs : (req,res)=>res.send("Ruta para la vista faqs")
};

module.exports = mainController;
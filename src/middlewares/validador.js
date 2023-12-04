const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
     console.log('Errores de validación:', errors.array());
    return res.status(400).render("faltaDatos",{title:"Verifique los datos"})
   
  }
  next();
};

module.exports = validateInput;

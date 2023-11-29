const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   //return res.status(400).json({ errors: errors.array() });
    return res.status(400).render("error400",{title:"Verifique los datos"}, res.redirect("/home"))
   
  }
  next();
};

module.exports = validateInput;

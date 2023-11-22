const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("error400",{title:"Verique nuevamente los datos ingresados"});
  }
  next();
};

module.exports = validateInput;
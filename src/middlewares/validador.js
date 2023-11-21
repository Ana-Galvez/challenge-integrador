const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   res.status(400).send({ errors: errors.array() });
    // return res.status(400).render("error400",{title:"Recurso no encontrado"});
  }
  next();
};

module.exports = validateInput;

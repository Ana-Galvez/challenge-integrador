const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).rend("/src/views/error400.ejs");
  }
  next();
};

module.exports = validateInput;

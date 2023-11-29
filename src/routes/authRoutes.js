const authController = require("../controllers/authController.js");
const express = require("express");
const validateInput = require("../middlewares/validador.js");
const { body } = require("express-validator");

const router = express.Router();

const loginValidation = [
  body("mail").isEmail().withMessage("Correo no válido, verifique"),
  body("contrasena")
    .isLength({ min: 6 })
    .isAlphanumeric()
    .withMessage("Contraseña mínima 8 caracteres con letras y números"),
];

const registerValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("no puede estar vacio")
    .isLength({ min: 3, max: 20 })
    .withMessage("Minimo 3 caracteres")
  ,
  body("apellido")
  .notEmpty()
  .withMessage("no puede estar vacio")
        .isLength({ min: 2, max: 20 })
    .withMessage("Minimo 3 caracteres")
  ,
  body("mail")
  .notEmpty()
  .withMessage("no puede estar vacio")
  .isEmail()
  .withMessage("Correo no válido, verifique")
  ,
  body("contrasena")
  .notEmpty()
  .withMessage("no puede estar vacio")
  .isLength({ min: 6 })
  .withMessage("minimo 6 caracteres")
  .isAlphanumeric()
  .withMessage("atencion deber ser alfanumerica")
  ,
  body("rep_contrasena")
  .custom((value, {req}) =>{
    if (value !== req.body.contrasena) {
        throw new Error('no son iguales la contraseñas')
    }
    return true;

  })
];

router.get("/login", authController.login_get);
router.post("/login", loginValidation, validateInput,  authController.login_post);
router.get("/register", authController.register_get);
router.post("/register", registerValidation, validateInput,  authController.register_post);
router.get("/logout", authController.logout);

module.exports = router;

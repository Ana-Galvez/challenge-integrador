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
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Minimo 3 caracteres"),
  ,
  body("apellido")
    .isString()
    .isLength({ min: 2, max: 20 })
    .withMessage("Minimo 3 caracteres"),
  ,
  body("mail").isEmail().withMessage("Correo no válido, verifique"),
  body("contrasena").isLength({ min: 6 }).isAlphanumeric(),
];

router.get("/login", authController.login_get);
router.post("/login", loginValidation, validateInput,  authController.login_post);
router.get("/register", authController.register_get);
router.post("/register",  authController.register_post
);
router.get("/logout", authController.logout);

module.exports = router;

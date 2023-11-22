const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();
const uploadfile = require('../middlewares/upload') 
const validateInput = require('../middlewares/validador')
const {body} = require('express-validator')


const createAndLoginValidation = [
  body('mail')
    .isEmail()
    .withMessage('Correo no válido, verifique'),
  body('contrasena')
    .isLength({ min: 8 })
    .withMessage('Contraseña mínima 8 caracteres con letras y números')
]

router.get("/",adminController.admin_get); // vista admin
router.get("/create", uploadfile.array('imagenes',2),    adminController.create_get); // vista crear
router.post("/create", createAndLoginValidation,validateInput,adminController.create_post); // vista creado VER VALIDACIÓN
router.get("/edit/:id", adminController.editID_get); // viste editar
router.put("/edit/:id",adminController.editID_put); // vista editado VER VALIDACIÓN
router.delete("/delete/:id", adminController.editID_delete);

module.exports = router;
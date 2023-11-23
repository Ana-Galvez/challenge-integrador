const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();
const uploadfile = require('../middlewares/upload') 
const validateInput = require('../middlewares/validador')
const {body} = require('express-validator')

const createAndEditValidation = [
  body('categoria')
    .notEmpty()
    .withMessage('Debe seleccionar una opción'),
  body('licencia')
    .notEmpty()
    .withMessage('Debe seleccionar una opción'),
  body('nombre_producto')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('detalle_producto')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('sku')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('precio')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('stock')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('descuento')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
  body('cuotas')
    .notEmpty()
    .withMessage('El campo no debe estar vacío'),
]

router.get("/",adminController.admin_get); // vista admin
router.get("/create",adminController.create_get); // vista crear
router.post("/create", uploadfile.array('imagenes',2),createAndEditValidation,validateInput,adminController.create_post); // vista creado VER VALIDACIÓN
router.get("/edit/:id", adminController.editID_get); // viste editar
router.put("/edit/:id",uploadfile.array('imagenes',2),createAndEditValidation,validateInput,adminController.editID_put); // vista editado VER VALIDACIÓN
router.delete("/delete/:id", adminController.editID_delete);

module.exports = router;
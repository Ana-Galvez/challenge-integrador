const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();
const uploadfile = require('../middlewares/upload') 
const validateInput = require('../middlewares/validador')
const {body} = require('express-validator')


router.get("/",adminController.admin_get); // vista admin
router.get("/create",adminController.create_get); // vista crear
router.post("/create", uploadfile.array('imagenes',2),adminController.create_post); // vista creado
router.get("/edit/:id", adminController.editID_get); // viste editar
router.put("/edit/:id", uploadfile.array('imagenes',2),adminController.editID_put); // vista editado
router.delete("/delete/:id", adminController.editID_delete);



module.exports = router;
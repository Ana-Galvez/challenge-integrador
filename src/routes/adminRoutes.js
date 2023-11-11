const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();


router.GET("/",adminController.admin_get);
router.GET("/create", adminController.create_get);
router.POST("/create", adminController.create_post);
router.GET("/edit/:id", adminController.editID_get);
router.PU("/edit/:id", adminController.editID_put);
router.DELETE("/delete/:id", adminController.editID_delete);
const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();


router.GET("/admin",adminController.admin_get);
router.GET("/admin/create", adminController.create_get);
router.POST("/admin/create", adminController.create_post);
router.GET("/admin/edit/:id", adminController.editID_get);
router.PU("/admin/edit/:id", adminController.editID_put);
router.DELETE("/admin/delete/:id", adminController.editID_delete);
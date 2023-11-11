const adminController = require("../controllers/adminController")
const express =  require('express');
const router = express.Router();


router.get("/",adminController.admin_get);
router.get("/create", adminController.create_get);
router.post("/create", adminController.create_post);
router.get("/edit/:id", adminController.editID_get);
router.put("/edit/:id", adminController.editID_put);
router.delete("/delete/:id", adminController.editID_delete);

module.exports = router;
const shopController = require("../controllers/shopController.js");
const express = require('express');
const router = express.Router();

router.get("/",shopController.shop_get);
router.post("/",shopController.shop_post);
router.get("/item/:id", shopController.itemId_get);
router.post("/item/:id/add", shopController.itemIdAdd_post);
router.get("/cart", shopController.cart_get);
router.post("/cart", shopController.cart_post);


module.exports = router;
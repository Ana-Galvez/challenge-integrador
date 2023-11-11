const shopController = require("../controllers/shopController.js");
const express = require('express');
const router = express.router();

router.get("/",shopController.shop_get);
router.get("/item/:id", shopController.itemId_get);
router.post("/item/:id/add", shopController.itemIdAdd_post);
router.get("/cart", shopController.cart_get);
router.post("/cart", shopController.cart_post);


module.exports = router;
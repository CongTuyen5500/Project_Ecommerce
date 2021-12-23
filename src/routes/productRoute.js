const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/productController");

router.get("/", productController.showProduct);
router.get("/create", productController.createProduct);
router.post("/store", productController.storeProduct);
router.delete("/:productId", productController.deleteProduct);
router.put("/edit/:productId", productController.editProduct);

module.exports = router;

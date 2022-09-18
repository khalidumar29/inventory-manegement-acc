const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);
router.route("/bulnk-update").patch(productController.bulkUpdateProduct);
router.route("/:id").patch(productController.updateProduct);
module.exports = router;

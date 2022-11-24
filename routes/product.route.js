const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const uploader = require("../middleware/uploader");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/Authoraization");

router.post(
  "/file-upload",

  uploader.array("image"),
  productController.fileUpload
);
router.route("/bulk-update").patch(productController.bulkUpdateProduct);
router.route("/bulk-delete").delete(productController.bulkDeleteProduct);
router
  .route("/")
  .get(productController.getProduct)
  .post(
    verifyToken,
    authorization("admin", "store-manager"),
    productController.createProduct
  );
router
  .route("/:id")
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);
module.exports = router;

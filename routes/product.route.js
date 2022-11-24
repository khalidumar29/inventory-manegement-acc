const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const uploader = require("../middleware/uploader");
const verifyToken = require("../middleware/verifyToken");

router.post(
  "/file-upload",
  verifyToken,
  uploader.array("image"),
  productController.fileUpload
);
router
  .route("/bulk-update")
  .patch(verifyToken, productController.bulkUpdateProduct);
router
  .route("/bulk-delete")
  .delete(verifyToken, productController.bulkDeleteProduct);
router
  .route("/")
  .get(verifyToken, productController.getProduct)
  .post(verifyToken, productController.createProduct);
router
  .route("/:id")
  .patch(verifyToken, productController.updateProduct)
  .delete(verifyToken, productController.deleteProduct);
module.exports = router;

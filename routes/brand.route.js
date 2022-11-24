const express = require("express");
const router = express.Router();
const BrandController = require("../controller/brand.controller");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/")
  .post(verifyToken, BrandController.createBrand)
  .get(verifyToken, BrandController.getBrand);

router
  .route("/:id")
  .get(verifyToken, BrandController.getBrandById)
  .patch(verifyToken, BrandController.updateBrand);

module.exports = router;

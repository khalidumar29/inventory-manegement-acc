const express = require("express");
const router = express.Router();
const BrandController = require("../controller/brand.controller");

router
  .route("/")
  .post(BrandController.createBrand)
  .get(BrandController.getBrand);

router.route("/:id").get(BrandController.getBrandById);

module.exports = router;

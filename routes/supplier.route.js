const express = require("express");
const router = express.Router();
const supplierController = require("../controller/supplier.controller");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/")
  .post(verifyToken, supplierController.createSupplier)
  .get(verifyToken, supplierController.getAllSuppliers);
module.exports = router;

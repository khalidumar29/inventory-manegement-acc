const express = require("express");
const router = express.Router();
const supplierController = require("../controller/supplier.controller");

router
  .route("/")
  .post(supplierController.createSupplier)
  .get(supplierController.getAllSuppliers);
module.exports = router;

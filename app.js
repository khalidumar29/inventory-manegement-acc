const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

//schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      unique: [true, "name must be unique"],
      minlength: [3, "name must be at least 3 characters"],
      maxlength: [100, "name is too large"],
    },
    description: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, "price can't be negetive"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "g", "l", "ml"],
        message: "unit must be kg,g,l or ml",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negetive"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          isInteger ? true : false;
        },
      },
      message: "quantity must be an integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discountinued"],
        message: "status can't be {VALUE}",
      },
    },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
    // categories: {
    //   name: { type: String, required: true },
    //   _id: mongoose.Schema.ObjectId,
    // },
  },
  {
    timestamps: true,
  }
);
// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// POST ALL PRODUCTS
app.post("/api/v1/product", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
});

module.exports = app;

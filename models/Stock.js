const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
// Stock Schema
const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name field is required"],
      trim: true,
      unique: [true, "Name already exists"],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters long"],
      maxLength: [100, "Name must be at most 50 characters long"],
    },
    description: { type: String, required: true },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "liter", "pcs", "bag"],
        message: "unit can't be {VALUE}, must be kg/liter/pcs/bag",
      },
    },
    imageURLs: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => {
          if (!Array.isAraay(v)) {
            return false;
          }
          let isValid = true;
          v.forEach((url) => {
            if (!url.startsWith("http")) {
              isValid = false;
            }
          });
          return isValid;
        },
        message: "please provide valid image urls",
      },
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price must be greater than 0"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity must be greater than 0"],
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "status can't be {VALUE}, must be in-stock/out-of-stock/discontinued",
      },
    },
    store: {
      type: String,
      trim: true,
      required: [true, "please provide store name"],
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "khulna",
          "rajshahi",
          "chittagong",
          "barishal",
          "sylhet",
          "rangpur",
          "mymensingh",
        ],
        message: "{VALUE} is not a valid store name",
      },
      id: {
        type: ObjectId,
        ref: "Store",
        required: true,
      },
    },
    suppliedBy: {
      name: String,
      trim: true,
      required: [true, "please provide supplier name"],
      id: {
        type: ObjectId,
        ref: "Supplier",
        required: true,
      },
    },
  },
  { timeStamp: true }
);

// Stock Model
const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;

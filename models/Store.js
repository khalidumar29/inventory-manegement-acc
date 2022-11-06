const mongoose = require("mongoose");
//const validator = require("validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

// ------------------ Schema ------------------
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store Name is required"],
      unique: true,
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "chittagong",
          "khulna",
          "rajshahi",
          "barisal",
          "sylhet",
          "rangpur",
          "mymensingh",
          "rangpur",
        ],
        message: "{VALUE}, Please provide a valid store name",
      },
    },
    description: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  { timestamps: true }
);

// ------------------ Model ------------------
const Store = mongoose.model("Store", storeSchema);
module.exports = Store;

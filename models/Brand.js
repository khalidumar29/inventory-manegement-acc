const mongoose = require("mongoose");
const validator = require("validator");
// ------------------ Schema ------------------
const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Brand Name is required"],
      maxlength: 100,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Brand Email is required"],
      maxlength: 100,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    website: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid website!`,
      },
    },
    location: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    supplier: [
      {
        name: {
          type: String,
          required: [true, "Supplier Name is required"],
          maxlength: 100,
          unique: true,
        },
        contactNumber: String,
        id: {
          type: mongoose.Schema.ObjectId,
          ref: "Supplier",
        },
        status: {
          type: String,
          enum: ["active", "inactive"],
          default: "active",
        },
      },
    ],
  },
  { timestamps: true }
);

// ------------------ Model ------------------
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;

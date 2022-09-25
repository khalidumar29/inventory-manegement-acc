const mongoose = require("mongoose");
//schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      unique: [true, "name must be unique"],
      minlength: [3, "name must be at least 3 characters"],
      maxlength: [100, "name is too large"],
      lowercase: true,
    },
    description: { type: String, required: true },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "g", "l", "ml", "bag"],
        message: "unit must be kg,g,l,bag or ml",
      },
    },
    imageURLs: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => {
          if (Array.isArray(v)) {
            return false;
          }
          let isValid = true;
          v.forEach((url) => {
            if (!validator.isURL(url)) {
              isValid = false;
            }
          });
          return isValid;
        },
        message: "please provide valid image urls",
      },
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// mongoose middleware for saving data: pre/post
productSchema.pre("save", function (next) {
  this.quantity === 0
    ? (this.status = "out-of-stock")
    : (this.status = "in-stock");
  next();
});

// productSchema.post("save", function (doc, next) {
//   console.log("post save data");
//   next();
// });
// method
productSchema.methods.logger = function () {
  console.log(`data saved for ${this.name}`);
};

// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

const mongoose = require("mongoose");
const validator = require("validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

// ------------------ Schema ------------------
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category Name is required"],
      maxlength: 100,
      unique: true,
      lowercase: true,
    },
    description: String,
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
    //   products: [
    //     {
    //       type: ObjectId,
    //       ref: "Product",
    //     },
    //   ],
    //   status: {
    //     type: String,
    //     enum: ["active", "inactive"],
    //     default: "active",
    //   },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now(),
    //   },
    //   updatedAt: {
    //     type: Date,
    //     default: Date.now(),
    //   },
  },
  { timestamps: true }
);

// ------------------ Model ------------------
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

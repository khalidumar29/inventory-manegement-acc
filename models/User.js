const mongoose = require("mongoose");
// --> Schema design
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [3, "name must be at least 3 characters"],
      maxlength: [100, "name is too large"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      validator: {
        validator: (value) => {
          const isEmail = validator.isEmail(value);
          isEmail ? true : false;
        },
        message: "use a valid email",
      },
      unique: [true, "this email already exists"],
      minlength: [3, "email must be at least 3 characters"],
      maxlength: [100, "email is too large"],
    },
    password: {
      type: String,
      validator: {
        validator: (value) => {
          const isStrong = validator.isStrongPassword(value);
          isStrong ? true : false;
        },
        message: "password must be strong",
      },
      required: [true, "password is required"],
      trim: true,
      minlength: [3, "password must be at least 3 characters"],
      maxlength: [100, "password is too large"],
    },
    role: {
      type: String,
      required: [true, "role is required"],
      trim: true,
      enum: {
        values: ["admin", "user"],
        message: "role must be admin or user",
      },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
// --> Model
const user = mongoose.model("User", userSchema);
module.exports = user;

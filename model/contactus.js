const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      default: null,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    message: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contactUs", contactUsSchema);

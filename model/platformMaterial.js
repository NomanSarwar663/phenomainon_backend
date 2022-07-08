const mongoose = require("mongoose");

const platformMaterialSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      default: null,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    url: {
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

module.exports = mongoose.model("platformMaterial", platformMaterialSchema);

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    dirName: {
      type: String,
      default: null,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    value: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    dirs: {
      type: Object,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("file", fileSchema);

const mongoose = require("mongoose");

const favouriteFileSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    file: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "file",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("favouriteFile", favouriteFileSchema);

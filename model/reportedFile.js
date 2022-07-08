const mongoose = require("mongoose");

const reportedFileSchema = new mongoose.Schema(
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
    type: {
        type: String,
        enum: ["ucs", "hb", "ic", "hsgv"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reportedFile", reportedFileSchema);

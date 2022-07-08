const mongoose = require("mongoose");

const incidentDataSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      default: null,
      trim: true,
      min: 3,
      max: 20,
    },
    incidents: { type: Array, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("incidentData", incidentDataSchema);

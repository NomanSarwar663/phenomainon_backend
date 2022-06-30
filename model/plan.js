const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    title: { type: String, required: true, default: null },
    description: { type: String, required: true, default: null },
    type: { type: String, enum: ["normal", "premium"], required: true, default: null },
}, { timestamps: true });

module.exports = mongoose.model("Plans", planSchema);
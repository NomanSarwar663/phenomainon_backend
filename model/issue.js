const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
    id: {type: Number, default: null},
    level: {type: Number, default: null},
    name: {type: String, default: null},
    position: {type: Number, default: null},
    parent_id: {type: Number, default: null},
}, {timestamps: true});

module.exports = mongoose.model("issues", issueSchema);

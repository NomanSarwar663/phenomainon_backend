const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
    displayName : {type: String, required : true}, 
    attachments : { type: Array, required : true }
}, {timestamps: true});

module.exports = mongoose.model("platform", platformSchema);
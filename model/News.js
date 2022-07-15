const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title : {type: String, required : true},
    description: {type: String,required : true},
    attachments : { type: Array, required : true }
}, {timestamps: true});

module.exports = mongoose.model("news", NewsSchema);
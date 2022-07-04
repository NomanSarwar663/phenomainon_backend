const mongoose = require("mongoose");

const bucketSchema = new mongoose.Schema({
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Leases",
        default: null,
    },
    type: {type: String, enum: ["Avatar", "IncidentImage","IncidentReport","phenomainon"],required: true},
    path: { type: Array, default: null }
}, {timestamps: true});

module.exports = mongoose.model("bucket", bucketSchema);
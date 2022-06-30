const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    lastName: {
        type: String,
        default: null,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    emailVerifyToken: { type: String, default: null, },
    isEmailVerified: { type: Boolean, default: false, },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: { type: String, required: true },
    resetVerifyToken: { type: String,default: null, },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
        default: null
    },
},
{ timestamps: true }
);


module.exports = mongoose.model("user", userSchema);

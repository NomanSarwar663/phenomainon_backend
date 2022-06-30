const mongoose = require("mongoose");

const accountingSchema = new mongoose.Schema({
    categoryId: {
        type: String,
        default: null,
        required: true,
    },
    // subCategoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true,
    // },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dueOn: {type: String, default: null },
    amount: {type: String, default: null, required: true},
    payer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contacts",
        required: true,
    },
    lease: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lease",
        default: null,
    },
    details: {type: String, default: null, required: true},
    files: { type: Array, default: null },
    type: {type: String, enum: ["property", "general"],required: true},
    accountingType: {type: String, enum: ["normal", "recurring"],required: true},
    transactionType: {type: String, enum: ["income", "expense"],required: true},
    startDate: {type: String, default: null },
    endDate: {type: String, default: null },
    frequency: {type: String, default: null },
}, {timestamps: true});

module.exports = mongoose.model("Accountings", accountingSchema);
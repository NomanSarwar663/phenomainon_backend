const validate = require('../helpers/validationSchema')
const { createResponse, formatResponse } = require('../helpers/utility')
const Accounting = require('../model/accounting')


async function addTransaction(data, file, createdBy) {
    let files = [];
    if (file.length > 0) {
        files = file.map(file => {
            return  file.filename 
        });
    }
    const transaction = {
        ...data,
        createdBy,
        files
    }
    const response = await validate.accountingSchema.validate(transaction)
    if (typeof response.error !== 'undefined') {
        return createResponse(response)
    }
    await Accounting.create(transaction)
    return formatResponse(201,'success', 'Inserted successfully')
}

async function getTransaction(createdBy) {
    const transactions = await Accounting.find({
        $and: [
            { accountingType: "normal" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200,"Success", "", {transactions})
}
async function getTransactionDetailById(createdBy,id) {
    const transactions = await Accounting.find({
        $and: [
            {_id: id},
            { accountingType: "normal" },
            { createdBy: createdBy },
        ]
    }).exec();
    return formatResponse(200,"Success", "", {transactions})
}
async function getRecurringTransaction(createdBy) {
    const transactions = await Accounting.find({
        $and: [
            { accountingType: "recurring" },
            { createdBy: createdBy }
        ]
    })
    .populate({ path: "payer", select: "_id firstName lastName" })
    .exec();
    return formatResponse(200,"Success", "", {transactions})
}

async function updateTransaction(data, _id, file) {
    let files = [];
    if (file.length > 0) {
        files = file.map(file => {
            return  file.filename 
        });
    }
    const remainingFiles = JSON.parse(data.remainingFiles)
    const transaction = {
        ...data,
        files : [...files,...remainingFiles ]
    }
    await Accounting.findOneAndUpdate({ _id },
        transaction,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
}
async function deleteTransaction(_id, createdBy) {
    await Accounting.deleteOne({ $and: [
        { _id: _id },
        { createdBy: createdBy }
    ] }
    )
    return formatResponse(202, "Success", "Deleted successfully")
}

module.exports = {
    addTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction,
    getRecurringTransaction,
    getTransactionDetailById
}
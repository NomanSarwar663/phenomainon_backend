const validate = require('../helpers/validationSchema')
const { createResponse, formatResponse } = require('../helpers/utility')
const Bucket = require('../model/bucket')
const { BaseError } = require("../helpers/ErrorHandling")


async function uploadToBucket(files,owner) {
    const type = Object.keys(files)
    const path = Object.values(files)[0].map((value)=>{
        return value.location
    })
    const data = {
        owner,
        type:type[0],
        path
    }
    await Bucket.create(data);
    
    return formatResponse(201,'success', 'Inserted successfully')
}

module.exports = {
    uploadToBucket,
    
}
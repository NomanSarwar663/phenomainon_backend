const validate = require('../helpers/validationSchema')
const { createResponse, formatResponse } = require('../helpers/utility')
const PlatformMaterial = require('../model/platformMaterial')
const { BaseError } = require("../helpers/ErrorHandling")


async function platformMaterialUpload(files,body) {
    const path = Object.values(files)[0].map((value)=>{
        return value.location
    })
    const data = {
        displayName: body.displayName,
        attachments:path
    }
    const response = await validate.platformMaterial.validate(data)
    if (typeof response.error !== 'undefined') {
        return createResponse(response)
    }
    await PlatformMaterial.create(data);
    
    return formatResponse(201,'success', 'Inserted successfully')
}

module.exports = {
    platformMaterialUpload
}
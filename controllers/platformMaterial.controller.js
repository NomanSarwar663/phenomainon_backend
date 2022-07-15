const { newsService } = require("../services")
const { createResponse, formatResponse } = require('../helpers/utility')

async function platformMaterialUpload(req, res) {
    try{
        const response = await platformMaterialService.platformMaterialUpload(req.files,req.body);
            if (response) {
                return res
                    .status(response.statusCode)
                    .json(response);
            }
    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 500).json(formatResponse(statusCode || 500, "error", message));
    }
}

module.exports = {
    platformMaterialUpload
}
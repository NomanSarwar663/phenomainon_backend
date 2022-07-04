const { bucketService } = require("../services")
// const { formatResponse } = require("../helpers/utility")

async function uploadToBucket(req, res) {
    try{
        const response = await bucketService.uploadToBucket(req.files,req.id);
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
    uploadToBucket,

}
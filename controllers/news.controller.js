const { newsService } = require("../services")
const { createResponse, formatResponse } = require('../helpers/utility')

async function newsUpload(req, res) {
    try{
        const response = await newsService.newsUpload(req.files,req.body);
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
async function newsBlogList(req, res) {
    try{
        const response = await newsService.newsBlogList();
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

async function newsBlogDetail(req, res) {
    try{
        const { id } = req.params
        const response = await newsService.newsBlogDetail(id);
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
    newsUpload,
    newsBlogList,
    newsBlogDetail

}
const {requestService} = require("../services")
const {formatResponse} = require("../helpers/utility")

async function insertCategories() {
    await Category.find({}).deleteMany();
    await Category.insertMany(categoriesData);
}

async function insertRequest(req, res) {
    try{
        // const requestPhoto = req.files.requestPhoto[0].filename
        const response = await requestService.insertRequest(req.body,req.files.requestPhoto,req.user._id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));    }
}
async function updateRequestByLandlord(req, res) {
    try{
        const { id } = req.params
        const requestPhoto = req.files.requestPhoto ? req.files.requestPhoto[0].filename : ""
        const response = await requestService.updateRequestByLandlord(req.body,id,requestPhoto);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));    }
}
async function deleteRequestByLandlord(req, res) {
    try{
        const { id } = req.params
        const response = await requestService.deleteRequestByLandlord(id,req.user._id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));    }
}
async function getRequests(req, res) {
    try{
        const response = await requestService.getRequests(req.user._id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));    }
}
module.exports = {
    insertRequest,
    getRequests,
    updateRequestByLandlord,
    deleteRequestByLandlord
}

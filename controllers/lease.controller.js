const { leaseService } = require("../services")
const { formatResponse } = require("../helpers/utility")

async function addLease(req, res) {
    try {

        const response = await leaseService.addLease(req.body,req.files.leaseDocuments,req.user._id);

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

async function getLeaseByLandlord(req, res) {
    try {

        const response = await leaseService.getLeaseByLandlord(req.user._id);

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
    addLease,
    getLeaseByLandlord
}
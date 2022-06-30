const { contactService } = require("../services")
const { formatResponse } = require("../helpers/utility")

async function addContact(req, res) {
    try {
        const photo = req.files.contactPhoto[0].filename

        const response = await contactService.addContact(req.body, photo, req.files.contactDocuments, req.user._id);

        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function getTenantsByLandlord(req, res) {
    try {

        const response = await contactService.getTenantsByLandlord(req.user._id);

        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function getTenantDetailById(req, res) {
    try {
        const { id } = req.params
        const response = await contactService.getTenantDetailById(req.user._id, id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function getContactsByServicePro(req, res) {
    try {

        const response = await contactService.getContactsByServicePro(req.user._id);

        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function getProfessionalsByLandlord(req, res) {
    try {


        const response = await contactService.getProfessionalsByLandlord(req.user._id);

        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function getProfessionalDetailById(req, res) {
    try {
        const { id } = req.params
        const response = await contactService.getProfessionalDetailById(req.user._id,id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}
async function updateContact(req, res) {
    try {
        const { id } = req.params
        const photo = req.files.contactPhoto ? req.files.contactPhoto[0].filename : ""
        const contactDocuments = req.files.contactDocuments ? req.files.contactDocuments : []
        const response = await contactService.updateContact(req.body, id, photo, contactDocuments);

        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }

    } catch (error) {
        const { message, statusCode } = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400, "error", message));
    }
}



module.exports = {
    addContact,
    getTenantsByLandlord,
    getProfessionalsByLandlord,
    updateContact,
    getContactsByServicePro,
    getProfessionalDetailById,
    getTenantDetailById
}

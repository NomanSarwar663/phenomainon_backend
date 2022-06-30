const validate = require("../helpers/validationSchema")
const { createResponse, formatResponse } = require("../helpers/utility")
const Contact = require("../model/contacts")

async function addContact(data, photo, document, createdBy) {
    let documents = [];
    if (document.length > 0) {
        documents = document.map(file => {
            return file.filename
        });
    }
    const contact = {
        ...data,
        address: JSON.parse(data.address),
        emergencyContact: JSON.parse(data.emergencyContact),
        pets: JSON.parse(data.pets),
        vehicle: JSON.parse(data.vehicle),
        notes: JSON.parse(data.notes),
        createdBy,
        photo,
        documents
    }
    const response = validate.contactSchema.validate(contact)
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    await Contact.create(contact);
    return formatResponse(201, "Success", "Inserted successfully")
}
async function getTenantsByLandlord(createdBy) {

    tenants = await Contact.find({
        $and: [
            { role: "tenant" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200, "Success", "", { tenants })
}
async function getTenantDetailById(createdBy, id) {
    tenants = await Contact.find({
        $and: [
            { _id: id },
            { role: "tenant" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200, "Success", "", { tenants })
}

async function getProfessionalsByLandlord(createdBy) {

    professionals = await Contact.find({
        $and: [
            { role: "professional" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200, "Success", "", { professionals })
}
async function getProfessionalDetailById(createdBy,id) {

    professionals = await Contact.find({
        $and: [
            {_id: id},
            { role: "professional" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200, "Success", "", { professionals })
}
async function getContactsByServicePro(createdBy) {

    professionals = await Contact.find({
        $and: [
            { role: "pro" },
            { createdBy: createdBy }
        ]
    }).exec();
    return formatResponse(200, "Success", "", { professionals })
}

async function updateContact(data, _id, photo, document) {
    let documents = [];
    if (document.length > 0) {
        documents = document.map(file => {
            return file.filename
        });
    }
    const remainingDocuments = JSON.parse(data.remainingFiles)
    const contact = {
        ...data,
        address: JSON.parse(data.address),
        emergencyContact: JSON.parse(data.emergencyContact),
        pets: JSON.parse(data.pets),
        vehicle: JSON.parse(data.vehicle),
        notes: JSON.parse(data.notes),
        documents: [...documents, ...remainingDocuments]
    }
    if (photo != "") {
        contact.photo = photo
    }
    await Contact.findOneAndUpdate({ _id },
        contact,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
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

const validate = require("../helpers/validationSchema")
const {createResponse, formatResponse} = require("../helpers/utility")
const Property = require("../model/property")
var fs = require('fs');
const Lease = require("../model/leases")
const Request = require("../model/request")
const Listing = require("../model/listing")

async function addProperty(data,propertyPhoto,propertyAttachmentss,createdBy) {
    // let propertyImageGallery = [];
    // if (propertyImageGalleryy.length > 0) {
    //     propertyImageGallery = propertyImageGalleryy.map(file => {
    //         return  file.filename 
    //     });
    // }
    let propertyAttachments = [];
    if (propertyAttachmentss.length > 0) {
        propertyAttachments = propertyAttachmentss.map(file => {
            return  file.filename 
        });
    }
    const property = {
        ...data,
        unitInfo : JSON.parse(data.unitInfo),
        createdBy,
        propertyPhoto,
        // propertyImageGallery,
        propertyAttachments
    }
    const response = validate.propertySchema.validate(property)
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    await Property.create(property);
    return formatResponse(201,"Success", "Inserted successfully")
}
async function getPropertiesByLandlord(createdBy) {

    const properties = await Property.find({createdBy})
    .exec();
    return formatResponse(200,"Success", "", {properties})
}
async function getPropertyDetailById(createdBy,id) {

    const properties = await Property.find({
        $and: [
            {_id: id},
            { createdBy: createdBy },
        ]
    })
    .exec();
    return formatResponse(200,"Success", "", {properties})
}
async function updateProperty(data,_id,propertyPhoto,propertyAttachmentss) {
    // data.deleteFiles.map(file => {
    //     fs.unlinkSync(`public/${file}`);
    // });
    // let propertyImageGallery = [];
    // if (propertyImageGalleryy.length > 0) {
    //     propertyImageGallery = propertyImageGalleryy.map(file => {
    //         return file.filename
    //     });
    // }
    let propertyAttachments = [];
    if (propertyAttachmentss.length > 0) {
        propertyAttachments = propertyAttachmentss.map(file => {
            return  file.filename 
        });
    }
    const remainingDocuments = JSON.parse(data.remainingFiles)
    const property = {
        ...data,
        unitInfo : JSON.parse(data.unitInfo),
        propertyAttachments : [...propertyAttachments,...remainingDocuments ]
    }
    if(propertyPhoto != ""){
        property.propertyPhoto = propertyPhoto
    }
    updatedProperty = await Property.findOneAndUpdate({ _id },
        property,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
}

async function deletePropertyByLandlord(_id, createdBy) {
    await Property.deleteOne({ $and: [
        { _id: _id },
        { createdBy: createdBy }
    ] }
    )
    return formatResponse(202, "Success", "Deleted successfully")
}

module.exports = {
    addProperty,
    getPropertiesByLandlord,
    updateProperty,
    deletePropertyByLandlord,
    getPropertyDetailById
}




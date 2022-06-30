const validate = require("../helpers/validationSchema")
const { createResponse, formatResponse } = require("../helpers/utility")
const Listing = require("../model/listing")
const Property = require("../model/property")
async function addListing(data, createdBy) {
    const listing = {
        createdBy,
        ...data
    }
    const response = validate.listingSchema.validate(listing)
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    await Listing.create(listing);
    return formatResponse(201, "Success", "Inserted successfully")
}


async function getListingByLandlord(createdBy) {

    const listing = await Property.find({ createdBy }).exec();
    return formatResponse(200, "Success", "", { listing })
}

async function updateListing(data, _id) {
    const listing = {
        ...data
    }
    await Listing.findOneAndUpdate({ _id },
        listing,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
}

module.exports = {
    addListing,
    getListingByLandlord,
    updateListing
}
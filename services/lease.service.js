const validate = require("../helpers/validationSchema")
const {createResponse, formatResponse} = require("../helpers/utility")
const Lease = require("../model/leases")

async function addLease(data,leaseDocumentss,createdBy) {
    
    let leaseDocuments = [];
    if (leaseDocumentss.length > 0) {
        leaseDocuments = leaseDocumentss.map(file => {
            return  file.filename 
        });
    }
    const lease = {
        createdBy,
        leaseDocuments,
        ...data,
        tenant : JSON.parse(data.tenant),
        rentSetting : JSON.parse(data.rentSetting),
        depositInfo : JSON.parse(data.depositInfo),
        insurance : JSON.parse(data.insurance),
    }
    const response = validate.leaseSchema.validate(lease)
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    await Lease.create(lease);
    return formatResponse(201,"Success", "Inserted successfully")
}
async function getLeaseByLandlord(createdBy) {

    const lease = await Lease.find({createdBy}).exec();
    return formatResponse(200,"Success", "", {lease})
}

module.exports = {
    addLease,
    getLeaseByLandlord
}
const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");
const Application = require("../model/application");

async function insertApplication(data, applicantPhoto, createdBy) {
  const application = {
    ...data,
    vehicle: JSON.parse(data.vehicle),
    pets: JSON.parse(data.pets),
    additionalOccupants: JSON.parse(data.additionalOccupants),
    rentalHistory: JSON.parse(data.rentalHistory),
    employmentHistory: JSON.parse(data.employmentHistory),
    additionalIncomes: JSON.parse(data.additionalIncomes),
    emergencyContacts: JSON.parse(data.emergencyContacts),
    references: JSON.parse(data.references),
    createdBy,
    applicantPhoto,
  };
  const response = await validate.aplicationSchema.validate(application);
  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }
  await Application.create(application);
  return formatResponse(201, "success", "Inserted successfully");
}

async function getApplication(createdBy) {
  const applications = await Application.find({ createdBy }).exec();
  return formatResponse(200, "Success", "", { applications });
}
async function getApplicationDetailById(createdBy, id) {
  const applications = await Application.find({
    $and: [{ _id: id }, { createdBy: createdBy }],
  }).exec();
  return formatResponse(200, "Success", "", { applications });
}
async function getApplicationByTenant(email) {
  const applications = await Application.find({ email }).exec();
  return formatResponse(200, "Success", "", { applications });
}
async function updateApplication(data, _id, applicantPhoto) {
  const application = {
    ...data,
    vehicle: JSON.parse(data.vehicle),
    pets: JSON.parse(data.pets),
    additionalOccupants: JSON.parse(data.additionalOccupants),
    rentalHistory: JSON.parse(data.rentalHistory),
    employmentHistory: JSON.parse(data.employmentHistory),
    additionalIncomes: JSON.parse(data.additionalIncomes),
    emergencyContacts: JSON.parse(data.emergencyContacts),
    references: JSON.parse(data.references),
  };
  if (applicantPhoto != "") {
    application.applicantPhoto = applicantPhoto;
  }
  const result = await Application.findOneAndUpdate({ _id }, application, {
    new: true,
  });
  return formatResponse(202, "Success", "Updated successfully");
}
async function deleteApplication(_id, createdBy) {
  await Application.deleteOne({
    $and: [{ _id: _id }, { createdBy: createdBy }],
  });
  return formatResponse(202, "Success", "Deleted successfully");
}

module.exports = {
  insertApplication,
  getApplication,
  updateApplication,
  deleteApplication,
  getApplicationByTenant,
  getApplicationDetailById
};

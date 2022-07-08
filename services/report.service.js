const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");
const reportedIncident = require("../model/newlyReportedIncident");

async function reportIncident(data, incidentPhoto, incidentVideo) {
  const application = {
    ...data,
    incidentStartDate: JSON.parse(data.incidentStartDate),
    incidentTime: JSON.parse(data.incidentTime),
    incidentDuration: JSON.parse(data.incidentDuration),
    createdBy,
    incidentPhoto,
    incidentVideo,
  };
  const response = await validate.reportIncident.validate(application);
  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }
  await reportedIncident.create(application);
  return formatResponse(201, "success", "Inserted successfully");
}

module.exports = {
  reportIncident,
};

const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");
const reportedIncident = require("../model/reportIncident");

async function reportIncident(data, createdBy , files) {

  var incidentfiles;
  var incidentImage;

  if(files.Incidentfiles){
    incidentfiles = files.Incidentfiles.map((value)=>{
      return value.location
    })
    
  }
  if(files.IncidentImage){
    incidentImage = files.IncidentImage.map((value)=>{
      return value.location
    })
  }
  const application = {
    ...data,
    incidentStartDate: JSON.parse(data.incidentStartDate),
    incidentTime: JSON.parse(data.incidentTime),
    incidentDuration: JSON.parse(data.incidentDuration),
    createdBy,
    incidentfiles,
    incidentImage,
  };
  const response = await validate.reportIncident.validate(application);
  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }
  await reportedIncident.create(application);
  return formatResponse(201, "success", "Inserted successfully");
}

async function countries() {
  const countries = await reportedIncident.find({}).distinct('countryName')
  
  if (user.length==0) {
      throw new BaseError(`user does not exist`, 404)
  }
  return formatResponse(200,"Success", "", {countries})
}

async function countryIncident(_country) {
  const countries = await reportedIncident.find({_country},'countryName state city longtitude latitude')
  
  if (user.length==0) {
      throw new BaseError(`user does not exist`, 404)
  }
  return formatResponse(200,"Success", "", {countries})
}


module.exports = {
  reportIncident,
  countries,
  countryIncident
};
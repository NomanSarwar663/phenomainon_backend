const { reportService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function reportIncident(req, res) {
  try {
    
    const response = await reportService.reportIncident(
      req.body,
      req.id,
      req.files
    );

    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

async function countries(req, res) {
  try {
    
    const response = await reportService.countries();
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

async function countryIncident(req, res) {
  try {
    const { country } = req.params
    const response = await reportService.countryIncident(country);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

module.exports = {
  reportIncident,
  countries,
  countryIncident
};
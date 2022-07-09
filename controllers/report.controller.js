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

module.exports = {
  reportIncident,
};
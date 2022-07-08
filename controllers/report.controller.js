const { reportService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function reportIncident(req, res) {
  try {
    // const incidentPhoto = req?.files?.incidentAttachment[0]?.filename
    //   ? req.files.incidentPhoto[0].filename
    //   : "";
    // const incidentVideo = req?.files?.incidentAttachment[1]?.filename
    //   ? req.files.incidentPhoto[1].filename
    //   : "";

    // const incidentPhoto = req?.files?.incidentPhoto
    //   ? req.files.incidentPhoto.fileName
    //   : "";
    // const incidentVideo = req?.files?.incidentVideo
    //   ? req.files.incidentVideo.fileName
    //   : "";

    const createdBy = req.headers?.user_id;

    // const response = await reportService.reportIncident(
    //   req.body,
    //   incidentPhoto,
    //   incidentVideo,
    //   createdBy
    // );

    const response = await reportService.reportIncident(
      req.body,
      "2344",
      "32423",
      createdBy
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

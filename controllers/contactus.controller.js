const { contactUsService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function contactUs(req, res) {
  try {
    const response = await contactUsService.sendMessage(req.body,req.user);

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
  contactUs,
};

const { userService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function updateUser(req, res) {
  try {
    const response = await userService.updateUser(req.body, req.user.user_id);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 500)
      .json(formatResponse(statusCode || 500, "error", message));
  }
}

module.exports = {
  updateUser,
};

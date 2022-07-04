const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const { BaseError } = require("../helpers/ErrorHandling");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

async function updateUser(data, _id) {
  const { firstName, lastName, phoneNo } = data;

  const response = await validate.updateUserSchema.validate({
    firstName,
    lastName,
    phoneNo,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const user_ = await User.findById(_id);

  if (user_) {
    await User.findOneAndUpdate(
      { _id },
      {
        $set: {
          firstName,
          lastName,
          phoneNo,
          updatedAt: Date.now,
        },
      }
    );

    const user = await User.findById(_id);

    const accessToken = jwt.sign(
      { user_id: user._id, email: user.email, role: user.role },
      process.env.JWT_TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    return formatResponse(200, "Success", "Save success", {
      user,
      accessToken,
    });
  }
  throw new BaseError("Invalid input data", 401);
}

module.exports = {
  updateUser,
};

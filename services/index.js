const {uploadToBucket} = require("./bucket.service.js")
const {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,verifyResetUser} = require("./auth.service")
const { sendMessage } = require("./contactus.service");

const bucketService = {
    uploadToBucket
}
const authService = {
    register,
    login,
    verifyEmail,
    changePassword,
    forgotPassword,
    resetPassword,
    verifyResetUser,
}
const contactUsService = {
    sendMessage,
  };
module.exports = {
    bucketService,
    authService,
    contactUsService
}

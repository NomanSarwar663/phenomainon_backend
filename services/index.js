const {uploadToBucket} = require("./bucket.service.js")
const {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,verifyResetUser} = require("./auth.service")
const { sendMessage } = require("./contactus.service");
const { reportIncident } = require("./report.service")
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

const reportService = {
    reportIncident
}
module.exports = {
    bucketService,
    authService,
    contactUsService,
    reportService
}

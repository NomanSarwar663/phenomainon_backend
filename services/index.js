const {uploadToBucket} = require("./bucket.service.js")
const {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,verifyResetUser} = require("./auth.service")
const { sendMessage } = require("./contactus.service");
const { reportIncident } = require("./report.service")
const { newsUpload,  newsBlogList,newsBlogDetail } = require("./news.service")
const {platformMaterialUpload } = require("./platformMaterial.service")
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
const newsService = {
    newsUpload,
    newsBlogList,
    newsBlogDetail
}
const platformMaterialService = {
    platformMaterialUpload
}  

  

module.exports = {
    bucketService,
    authService,
    contactUsService,
    reportService,
    platformMaterialService
}

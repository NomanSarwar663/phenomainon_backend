const {uploadToBucket} = require("./bucket.service.js")
const {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,verifyResetUser} = require("./auth.service")

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
module.exports = {
    bucketService,
    authService
}

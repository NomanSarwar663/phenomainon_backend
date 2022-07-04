const {uploadToBucket} = require("./bucket.service.js")
const {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,verifyResetUser,googleSignin,facebookSignin} = require("./auth.service")

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
    googleSignin,
    facebookSignin
}
module.exports = {
    bucketService,
    authService
}

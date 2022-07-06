const validate = require("../helpers/validationSchema")
const { createResponse, formatResponse } = require("../helpers/utility")
const {mail} = require('./mail.service')

async function sendMessage(data,userData) {
    const { firstName, lastName } = userData
    const { email, message, subject } = data;

    const response = validate.contactUsSchema.validate({ firstName, lastName, email, message, subject })
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    await mail(firstName, lastName, email, message, subject)
    return formatResponse(200, "Success", "Thanks for your message we will get back to you soon")
}

module.exports = {
    sendMessage,
}
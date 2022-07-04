const validate = require("../helpers/validationSchema")
const { createResponse, formatResponse } = require("../helpers/utility")

async function sendMessage(data) {

    const { firstName, lastName, email, message } = data;

    const response = validate.contactUsSchema.validate({ firstName, lastName, email, message })
    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }
    return formatResponse(200, "Success", "Thanks for your message we will get back to you soon")
}

module.exports = {
    sendMessage,
}
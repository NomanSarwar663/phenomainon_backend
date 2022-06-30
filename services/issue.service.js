const validate = require("../helpers/validationSchema")
const {createResponse, formatResponse} = require("../helpers/utility")
const Issue = require("../model/issue")

async function insertIssues(data) {
    try {
        const {title} = data;
        const response = await validate.issueSchema.validate({
            title
        });
        if (typeof response.error !== "undefined") {
            return createResponse(response);
        }
        await Issue.create({title});
        return formatResponse("success", "Inserted successfully")
    } catch (error) {
        return formatResponse("success", "", {error}, 500)
    }

}

async function getIssues() {
    try {
        const data = await Issue.find({});
        return formatResponse("success", "", {data})
    } catch (error) {
        return formatResponse("success", "", 500, {error})
    }

}

module.exports = {
    insertIssues,
    getIssues
}




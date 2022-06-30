const {issueService} = require("../services")

async function insertIssues(req, res) {
    const response = await issueService.insertIssues(req.body);
    return res.status(response.statusCode).json(response)
}

async function getIssues(req, res) {
    const response = await issueService.getIssues();
    return res.status(response.statusCode).json(response)
}

module.exports = {
    insertIssues,
    getIssues
}

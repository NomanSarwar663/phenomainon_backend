const {categoryService} = require("../services")

async function insertCategories(req, res) {
    const response = await categoryService.insertCategories();
    return res.status( response.statusCode).json(response)
}

async function findRequested(req, res) {
    const response = await categoryService.findRequested(req.query);
    return res.status( response.statusCode).json(response)
}

module.exports = {
    insertCategories,
    findRequested
}

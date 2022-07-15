const validate = require('../helpers/validationSchema')
const { createResponse, formatResponse } = require('../helpers/utility')
const News = require('../model/News')
const { BaseError } = require("../helpers/ErrorHandling")


async function newsUpload(files,body) {
    const path = Object.values(files)[0].map((value)=>{
        return value.location
    })
    const data = {
        title: body.title,
        description: body.description,
        attachments:path
    }
    const response = await validate.news.validate(data)
    if (typeof response.error !== 'undefined') {
        return createResponse(response)
    }
    await News.create(data);
    
    return formatResponse(201,'success', 'Inserted successfully')
}
async function newsBlogList() {
    const blogs = await News.find()
    return formatResponse(200,"Success", "", {blogs})
}
async function newsBlogDetail(id) {
    const blogs = await News.findById(id)
    return formatResponse(200,"Success", "", {blogs})
}

module.exports = {
    newsUpload,
    newsBlogList,
    newsBlogDetail
    
}
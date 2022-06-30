const Task = require('../model/task')
const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");


async function insertTask(data,createdBy) {
    const task = {
        ...data,
        createdBy
    }
    const response = await validate.taskSchema.validate(task)
    if (typeof response.error !== 'undefined') {
        return createResponse(response)
    }
    await Task.create(task)
    return formatResponse(201,'success', 'Inserted successfully')
}
async function getTasks(createdBy) {
    const tasks = await Task.find({createdBy}).exec();
    return formatResponse(200,"Success", "", {tasks})
}

async function updateTask(data, _id) {
    const result = await Task.findOneAndUpdate({ _id },
        data,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
}
async function deleteTask(_id, createdBy) {
    await Task.deleteOne({ $and: [
        { _id: _id },
        { createdBy: createdBy }
    ] }
    )
    return formatResponse(202, "Success", "Deleted successfully")
}

module.exports = {
    insertTask,
    getTasks,
    updateTask,
    deleteTask
}
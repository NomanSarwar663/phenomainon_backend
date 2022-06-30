const Reminder = require('../model/reminder')
const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");

async function insertReminder(data,createdBy) {
    const reminder = {
        ...data,
        createdBy
    }
    const response = await validate.reminderSchema.validate(reminder)
    if (typeof response.error !== 'undefined') {
        return createResponse(response)
    }
    await Reminder.create(reminder)
    return formatResponse(201,'success', 'Inserted successfully')
}
async function getReminders(createdBy) {
    const reminders = await Reminder.find({createdBy}).exec();
    return formatResponse(200,"Success", "", {reminders})
}
async function getReminderDetailById(createdBy,id) {
    const reminders = await Reminder.find({
        $and: [
            {_id: id},
            { createdBy: createdBy },
        ]
    }).exec();
    return formatResponse(200,"Success", "", {reminders})
}

async function updateReminder(data, _id) {
    const result = await Reminder.findOneAndUpdate({ _id },
        data,
        { new: true }
    )
    return formatResponse(202, "Success", "Updated successfully")
}
async function deleteReminder(_id, createdBy) {
    await Reminder.deleteOne({ $and: [
        { _id: _id },
        { createdBy: createdBy }
    ] }
    )
    return formatResponse(202, "Success", "Deleted successfully")
}

module.exports = {
    insertReminder,
    getReminders,
    updateReminder,
    deleteReminder,
    getReminderDetailById
}
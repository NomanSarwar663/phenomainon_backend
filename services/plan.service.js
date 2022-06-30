const Plan = require("../model/plan");
const validate = require("../helpers/validationSchema");
const { createResponse, formatResponse } = require("../helpers/utility");
const { BaseError } = require("../helpers/ErrorHandling");


async function createPlan(data) {
    const { title, description, type } = data;
    const response = validate.planSchema.validate({
        title, description, type
    });

    if (typeof response.error !== "undefined") {
        return createResponse(response);
    }

    const oldPlan = await Plan.findOne({ type });

    if (oldPlan) {
        throw new BaseError("Plan already exist", 400);
    }
    await Plan.create({
        title,
        description,
        type
    });

    return formatResponse(201, "Success", "Plan Created Successfully")
}

async function getPlans() {
    const plans = await Plan.find().exec();

    return formatResponse(200, "Success", "", { plans })
}

module.exports = { createPlan,getPlans }
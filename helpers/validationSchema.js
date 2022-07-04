const Joi = require("joi");

const validationValues = {
    email: Joi.string()
        .lowercase()
        .pattern(new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"))
        .required()
        .messages({
            "string.base": `Email does not have a valid value`,
            "string.pattern.base": `Email does not have a valid value`,
            "string.empty": `Email cannot be empty`,
            "any.required": `Email is required`,
        }),
    password: Joi.string()
        .lowercase()
        .required().min(6)
        .messages({
            "string.pattern.base": `Password does not have a valid value`,
            "string.empty": `Password cannot be empty`,
            "any.required": `Password is required`,
            "string.min": `Password length must be 6 characters long`,
        }),
    firstName: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.empty": `Name cannot be empty`,
            "any.required": `Name required`,
            "string.min": `First Name length must be atleast 3 characters long`,
            "string.max": `First Name length must be exeed 20 characters`,
        }),
    lastName: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.empty": `Name cannot be empty`,
            "any.required": `Name required`,
            "string.min": `Last Name length must be atleast 3 characters long`,
            "string.max": `Last Name length must not be exeed 20 characters`,
        })
}

const registerUserSchema = Joi.object({
    email: validationValues.email,
    firstName: validationValues.firstName,
    lastName: validationValues.lastName,
    password: validationValues.password
});

const updateUserSchema = Joi.object({
    email: Joi.string().optional().messages({
        "string.empty": `email cannot be empty`
    }),
    firstName: Joi.string().optional().messages({
        "string.empty": `firstName cannot be empty`
    }),
    lastName:Joi.string().optional().messages({
        "string.empty": `lastName be empty`,
    }),
    avatar: Joi.string().optional().messages({
        "string.empty": `avatar cannot be empty`
    }),
});


/**
 * wrap all validation schemas with validate object
 */
module.exports = {
    registerUserSchema,
    updateUserSchema
};

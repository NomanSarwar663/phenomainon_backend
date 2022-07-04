const {authService} = require("../services")
const {formatResponse} = require("../helpers/utility")

async function register(req, res) {
    try {
        const response = await authService.register(req.body);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}

async function login(req, res) {
    try {
        const response = await authService.login(req.body);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}
async function changePassword(req, res) {
    try {
        const response = await authService.changePassword(req.body,req.user.user_id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}
async function userPlan(req, res) {
    try {
        const response = await authService.userPlan(req.body,req.user.user_id);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}
async function forgotPassword(req, res) {
    try {
        const response = await authService.forgotPassword(req.body);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}
async function resetPassword(req, res) {
    try {
        const response = await authService.resetPassword(req.body);
        if (response) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error;
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message));
    }
}

async function verifyEmail(req,res) {
    try {
        const response = await authService.verifyEmail(req.body)
        if (response ) {
            return res
                .status(response.statusCode)
                .json(response);
        }
    } catch (error) {
        const {message, statusCode} = error
        res.status(statusCode || 400).json(formatResponse(statusCode || 400,"error", message))
    }
}

module.exports = {register, login, verifyEmail,changePassword,forgotPassword,resetPassword,userPlan}

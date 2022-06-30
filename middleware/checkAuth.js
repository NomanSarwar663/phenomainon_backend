const User = require('../model/user')
const jwt = require("jsonwebtoken");

let checkToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (token)
        token = token.slice(7, token.length);
    if (token) {
        jwt.verify(token, process.env.JWT_TOKEN_KEY, async (err, decoded) => {
            if (err) {
                res.json({
                    status: false,
                    msg: " token is invalid",
                });
            } else {
                let user = await User.find(decoded._id)
                delete user.password;
                delete user.userToken;
                req.user = user
                next();
            }
        });
    } else {
        res.json({
            status: false,
            msg: 'Token is not provided'
        });
    }
}

module.exports = checkToken

const jwt = require('jsonwebtoken');
const configObject = require("../config/envConfig.js");

const checkUserRole = (allowedRoles) => (req, res, next) => {
    const token = req.cookies.cookieToken;
    if (token) {
        jwt.verify(token, configObject.auth.jwt_secret, (err, decoded) => {
            if (err) {
                res.redirect("/access-denied");
            } else {
                const userRole = decoded.user.role;
                if (allowedRoles.includes(userRole)) {
                    next();
                } else {
                    res.redirect("/access-denied");
                }
            }
        });
    } else {
        res.redirect("/access-denied");
    }
};

module.exports = checkUserRole;
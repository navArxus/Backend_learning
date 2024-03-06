
const { getUser } = require("../services/auth")
const authUserRole = (roles = []) => {
    return async (req, res, next) => {
        console.log(req.user);
        if (req.user.role.includes(roles)) {
            next();
        } else {
            res.status(403).send({ error: 'You do not have permission to access this resource.' });
        }
    }
}
const authUser = (req, res, next) => {
    // let token = req.cookies?.token
    const token = req.headers['authorization'].split(" ")[1]

    if (token) {
        const isValid = getUser(token)
        req.user = isValid.user
        if (isValid) {
            return next()
        }
        else {
            return res.redirect("/login")
        }
    } else {
        return res.redirect("/login")
    }
}

module.exports = {authUser,authUserRole}

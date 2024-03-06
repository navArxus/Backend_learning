
const { getUser } = require("../services/auth")

const authUser = (req, res, next) => {
    // let token = req.cookies?.token
    let token
    token = req.headers['authorization']
    console.log(token)
    console.log(req.headers)
    console.log(token)
    if (token) {
        console.log("i am in ")
        const isValid = getUser(token)
        console.log(`isvalid ${isValid}`)
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

module.exports = authUser

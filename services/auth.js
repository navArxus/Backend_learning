const jwt = require('jsonwebtoken')

const SECRET = "arxus#arxus"

const setUser = (user) => {
    return jwt.sign({ user }, SECRET)
}


const getUser = (token) => {
    try {
        jwt.verify(token, SECRET)
    } catch (error) {
        return null
    }
    // console.log(jwt.verify(token, SECRET))
    return jwt.verify(token, SECRET)
}
module.exports = {
    setUser,
    getUser
}
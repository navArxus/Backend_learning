const userModal = require("../models/user")
const { setUser } = require("../services/auth")


const handleSignup = async (req, res) => {
    console.log(req.body)
    const { email, name, password } = req.body;
    if (email && name && password) {
        const user = await userModal.create({
            email,
            name,
            password
        })
        req.user = user
        const token = setUser(user);
        res.cookie("token", token)
        return res.render("homepage")
    } else {
        res.status(400).json({ message: "Invalid data" })
    }

}
const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModal.findOne({ email, password })
    if (!user) {
        return res.status(401).json({ message: "User Not found" })
    } else {
        req.user = user
        const token = setUser(user);
        res.cookie("token", token)
        return res.render("homepage")
    }
}
module.exports = {
    handleSignup,
    handleLogin
}
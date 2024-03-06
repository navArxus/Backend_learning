const express = require('express')
const {handleRedirect} = require("../controllers/url")
const router = express.Router()

router.get('/',(req,res) => {
    res.render("homepage")
})
router.get('/login',(req,res) => {
    res.render("login")
})
router.get('/signup',(req,res) => {
    res.render("signup")
})
router.get('/s/:id',handleRedirect)

module.exports = router
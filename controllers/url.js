const urlModel = require("../models/url")
const shortid = require("shortid");

async function handleGenrateUrl(req, res) {
    const shortID = shortid()
    const body = req.body
    if (!body.url) {
        res.status(400).json({
            message: "Bad request. Try again!"
        })
    }
    else {
        await urlModel.create({
            ShortId: shortID,
            RedirectUrl: body.url,
            VisitHistory: [],
            createdBy:req.user?._id 
        })
        res.status(200).json({
            message: "OKay recives successfully ",
            shortID
        })
    }
}
async function handleRedirect(req, res) {
    const obj = await urlModel.findOne({ ShortId: req.params.id })
    if (!obj) {
        return res.send('<h1>Page not found</h1>')
    } else {
        res.redirect(obj.RedirectUrl);
    }
}


module.exports = { handleGenrateUrl, handleRedirect };
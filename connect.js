const mongoose = require("mongoose")

const connectMongodb = (url) => {
    return mongoose.connect(url)
}

module.exports = connectMongodb 
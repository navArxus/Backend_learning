const mongoose = require("mongoose")


const urlSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        required: true,
        unique: true
    },
    RedirectUrl: {
        type:String,
        required: true,
    },
    VisitHistory : [{timeStamp:{type:Number}}],
    createdBy : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},
    {timestamps:true}
)

const URL = mongoose.model("url",urlSchema)

module.exports = URL
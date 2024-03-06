const express = require('express')
const urlRoutes = require("./Routes/url")
const userRoutes = require("./Routes/user")
const app = express()
const connexttoMOngo = require("./connect")
const redirectCont = require("./Routes/index")
const PORT = 8000;
const cookieParser = require("cookie-parser")

require("dotenv").config()

// Middlewares
const {authUser,authUserRole} = require("./middlewares/auth") 


app.set( "view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());

console.log()
connexttoMOngo(process.env.DATA_BASE_URL).then(() => {
    console.log( "Connected to MongoDB" )
}).catch(err => {
    console.log("Error in connection : ",err)
}) 


app.use("/url",authUser,authUserRole(["ADMIN"]),urlRoutes)
app.use("/user",userRoutes)
app.use("/",redirectCont)


app.listen(PORT , () => {
    console.log(`Server started at ${PORT} `)
})
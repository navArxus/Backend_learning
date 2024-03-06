const express = require('express')
const urlRoutes = require("./Routes/url")
const userRoutes = require("./Routes/user")
const app = express()
const connexttoMOngo = require("./connect")
const redirectCont = require("./Routes/index")
const PORT = 8000;
const cookieParser = require("cookie-parser")

// Middlewares
const authUser = require("./middlewares/auth") 


app.set( "view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());

connexttoMOngo("mongodb://127.0.0.1:27017/short-url2").then(() => {
    console.log( "Connected to MongoDB" )
})


app.use("/url",authUser,urlRoutes)
app.use("/user",userRoutes)
app.use("/",redirectCont)


app.listen(PORT , () => {
    console.log(`Server started at ${PORT} `)
})
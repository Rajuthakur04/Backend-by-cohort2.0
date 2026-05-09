const mongoose = require("mongoose")
 
const app = require("./src/app")
const ConnectToDatabase = require("./src/config/DataBase")

// Database connection

 

ConnectToDatabase()

app.listen(3000,(req,res )=>{
    console.log("server is running at locathost 3000")
})
const mongoose = require("mongoose")
 
const app = require("./src/app")

// Database connection

 function ConnectToDatabase() {
    
    mongoose.connect("mongodb://localhost:27017/employeeDB")
    .then(()=>{
        console.log("Database connected successfully")
        })
}  

ConnectToDatabase()

app.listen(3000,(req,res )=>{
    console.log("server is running at locathost 3000")
})
//server listen or start karna
// data base se connect karna
  

 const app = require("./src/app")

const mongoose = require("mongoose")
function connectToDb(){
    mongoose.connect("mongodb+srv://thakurraju3540_db_user:LsYBxhzs35GUzHbR@cluster0.nfs7mlb.mongodb.net/day-6")
    .then(() => {
        console.log("connect to database")
    })
}

connectToDb()
 

 app.listen(3000, () =>{
    console.log("Backend server is running")
 })
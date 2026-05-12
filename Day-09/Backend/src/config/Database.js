 const mongoose = require('mongoose')

 const  ConnectDb = async () =>{

    await mongoose.connect(process.env.MONGO_URI)

    console.log("Database connected")
 }

 module.exports=ConnectDb
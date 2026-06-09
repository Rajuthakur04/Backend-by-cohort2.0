const mongoose = require("mongoose")

function ConnectToDatabase() {

    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log("Database connection error")
        console.log(err)
    })
}

module.exports = ConnectToDatabase
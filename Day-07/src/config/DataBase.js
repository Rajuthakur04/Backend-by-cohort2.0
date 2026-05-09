const mongoose = require("mongoose")

function ConnectToDatabase() {

    mongoose.connect(
        "mongodb://thakurraju3540_db_user:D3vjSQSg01E58oYG@ac-nmlig9w-shard-00-00.kylmaoa.mongodb.net:27017,ac-nmlig9w-shard-00-01.kylmaoa.mongodb.net:27017,ac-nmlig9w-shard-00-02.kylmaoa.mongodb.net:27017/?ssl=true&replicaSet=atlas-12us4k-shard-0&authSource=admin&appName=Cluster2"
    )
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log("Database connection error")
        console.log(err)
    })
}

module.exports = ConnectToDatabase
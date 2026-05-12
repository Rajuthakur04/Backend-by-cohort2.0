require('dotenv').config()

const app = require('./src/aap.js')
const ConnectDb = require('./src/config/Database.js')



ConnectDb()

app.listen(3000, ()=>{
    console.log("server is running")
})
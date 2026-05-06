const express = require("express")





const app = express() // create an instance of express


app.use(express.json())

const notes = []


app.post("/notes", (req, res)=>{

    console.log(req.body)
    
    notes.push(req.body)

    res.send("Yes Notes ban gaya  ")

})

app.get("/notes", (req, res)=>{
    res.send(notes)
})


// app.get("/notes", (req, res)=>{
//     res.send("Notes ban gaya  ")
// })

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

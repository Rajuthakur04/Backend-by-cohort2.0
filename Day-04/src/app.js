// this file uese = server create karna and logic of codes ,
// [server config karna ]

const express = require("express")

 const app = express() // server was created

 
// app.get("/",(req,res)=>{
//     res.send("Hello jii")
// })


// // [post request create karna ]
// app.post("/notes",(req,res)=>{
//     console.log(req.body)
//     res.send("notes created successdilly")
// })

// // [get request create karna ]
// app.get("/notes",(req,res)=>{
//     res.send("notes fetched successfully")
// })

// //[delete request create karna ]
// app.delete("/notes/:index",(req,res)=>{
//     delete notes[req.params.index]
//     res.send("notes deleted successfully")
// })


// //[patch request create karna ]
// // req.body ={description: "samplemodified description"}

// app.patch("/notes/:index" ,(req,res)=>{
//     notes[req.params.index].description = req.body.description
//     res.send("notes updated successfully")
// })


app.use(express.json()) // json data ko read karne ke liye middleware use karna


const notes = []

app.post("/notes" , (req, res)=>{
    notes.push(req.body)
    res.status(201).json({
        message: "notes created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json
    notes: notes
})

 app.delete("/notes/:index" , (req,res)=>{
   delete notes [req.params.index]   
   
   res.sendStatus(200).json({
    message: "notes deleted successfully"
   })
})

 module.exports = app
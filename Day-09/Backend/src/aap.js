 //this file is only use in create the server
 
 
 const express = require("express")
 const noteModel = require("./models/note.model")
 const cors = require("cors")

 const app = express()

app.use(cors())

app.use(express.json())

app.post('/api/notes', async (req,res)=>{

    const {title,description} = req.body

  const note = await noteModel.create({title,description})
  res.status(201).json({
    message:"Note created successfully",
    note
  })
})


// fetch the data
app.get("/api/notes" ,async (req,res)=>{
  const notes = await noteModel.find()

  res.status(200).json({
    message:"Notes fetched successfully",
    notes
  })
})

// delete the data

app.delete("/api/notes/:id" ,async (req,res)=>{
    const id = req.params.id

await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note deleted successfully"
    })

})

//patch for update the data

app.patch('/api/notes/:id',async (req,res)=>{
    const id = req.params.id
    const { discription } = req.body

    await noteModel.findByIdAndUpdate(id, {discription})
})

 module.exports = app
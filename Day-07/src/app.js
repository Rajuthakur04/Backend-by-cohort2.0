// this file use only for create a server 

const express = require("express")
const NotesModel = require("./model/notes.model.js")
 const app = express()
app.use(express.json())

 //post method

 app.post("/notes", async (req,res)=>{
    const{title,description} = req.body

  const note = await NotesModel.create({
    title,
    description
  })
    res.status(201).json({
        message:"note created",
        note

    })
 })

 module.exports = app
// server ko create karna 
// server config karna 

   const express = require("express")


   const app = express()

   // routes create karna
  app.get("/", (req,res) =>{
    res.send("chalo bhai server chal gay finally 😊")
  })

   module.exports = app
const express = require("express")
const route = express.Router()

route.get("/hello/:name",(req,res)=>{

    console.log(req.params.name);

    // Student.

    res.send(req.params.id)
})

route.get("/hi",(req,res)=>{
    res.send("Hello")
})

module.exports = route
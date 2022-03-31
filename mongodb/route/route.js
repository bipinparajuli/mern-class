const express = require("express");
const User = require("../model/user")

const route = express.Router()

route.get("/test",(req,res)=>{
    res.send("Test is working")
})


route.post('/post',(req,res)=>{
    let user = new User(req.body)
    console.log(user);

    user.save((err,data)=>{

        if(err) res.send(err)

    res.send("data saved successfully")


    })

})


module.exports = route
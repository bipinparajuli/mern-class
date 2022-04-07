const express = require("express");
const fs = require("fs")
const formidable = require("formidable")

const User = require("../model/user")

const route = express.Router()

route.get("/test",(req,res)=>{
    res.send("Test is working")
})


route.post('/post',(req,res)=>{
// {name:"someone"}

    const form = new formidable.IncomingForm()


    form.parse(req,(err,fields,files)=>{ //parse incoming form

        let user = new User(fields)
            user.images = ""

        if(files.images){
        // console.log("FIELDS",files)

        user.images.data = fs.readFileSync(files.images.filepath); //store data from filesystem
        user.images.contentType = files.images.mimetype; //set content type        

        }


        console.log(user.images.data);

        user.save((err,data)=>{
            if(err)console.log(err);

            res.send(data)
        })


    })

    // let user = new User(req.body)
    
    // console.log(user);

    // user.save((err,data)=>{

    //     if(err) res.send(err)

    // res.send("data saved successfully",data)


    // })

})

route.get("/getpost/:id",(req,res)=>{
    User.findById(req.params.id,(err,data)=>{
        if(err) console.log(err);

        else{
            console.log(data);
            res.set("Content-Type",data.images.contentType)
            res.send(data.images.data)
        }
    })
})

//update route
route.put("/update/:id",(req,res)=>{
    User.updateOne({_id:req.params.id}, //updating condition
        {$set:{name:req.body.name}},(err,data)=>{
            if(err) console.log(err);

        else{
            res.send(data)
        }
        })
})
//CRUD => CREATE,READ,UPDATE AND DELETE
//delete route
route.delete("/delete/:id",(req,res)=>{
    User.remove({_id:req.params.id},(err,data)=>{
        if(err) console.log(err);

        else{
            res.send(data)
        }
    })
})


module.exports = route
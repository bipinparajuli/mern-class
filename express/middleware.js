const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const app = express();

app.use(bodyParser.json())
app.use(cookieParser())

// app.use("/api",route)

app.get('/hello/:name',middleware,(req,res)=>{
    // console.log("Body",req.body);
    
    res.send('<h1>Hello</h1>')
})

app.get('/postme',(req,res)=>{
console.log(req.cookies);
const {name,age} = req.body
console.log(name,age);
res.send("send")

})

// app.delete()

// app.put()

function middleware(req,res,next){

    
    console.log(req.params);

    if(req.params.name == 'sp-santosh'){
        req.name ={
            name:"sanotsh",
            imge:"httpssdasdas",
            stars:"2"
        }
        next()

    }
    else{
        // next()

        res.send("<h1>404 Not found</h1>")
    }

}



app.use((req,res,next)=>{
    // res.send("Not found !!!")
    let customError = {
        sucess:false,
        message:"Page not found"
    }
    next(customError)
})

app.use((err,req,res,next)=>{
    res.send(err)
    // next("Not found")
})


app.listen(8001,()=>{
    console.log("Server is running at port 8001")
})

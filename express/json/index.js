require("dotenv").config()
const express = require("express");
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express();

const PORT = 8000

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("<h1>Hello from JWT class</h1>")
})

app.post("/signin",(req,res)=>{
    // console.log(process.env.SECRET)
    const {email,password} = req.body
    let dbemail = "admin@gmail.com"
    let dbpassword = "admin321"

    if(email == dbemail && password == dbpassword){
        
        let token = jwt.sign({email:email},process.env.SECRET,{expiresIn:"1h"}); 

        res.send({
            result:"success",
            token:token
        })

    }else{
        res.status(400).send("failure")
    }


})

app.get("/myphoto",(req,res,next)=>{

    // console.log(req.headers.authorization.split(" ")[1]);
    let token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,"abcd",(err,decode)=>{
        console.log("ERROR ==> ",err);
        console.log("DATA ==> ",decode);
        if(err){
            res.send("Not authorized")
        } 
        


        else{
            // req.user = decode
            // let emmmail =  decode.email

            // let user =  slect * from table where email = decode.email

            // if(decode.email  )
            res.send("you can take your photo")
        }

    })

})



app.listen(PORT,()=>{
    console.log("App is running at port 8000")
})
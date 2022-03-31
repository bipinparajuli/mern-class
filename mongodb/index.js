const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./route/route")

//database connection
mongoose.connect("mongodb://localhost:27017/mernstack").then(()=>{
    console.log("db connected");
}).catch(err=>{
    console.log(err);
})

//global middleware
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log(req.body);
    res.send("api is working")
})

//our routes
app.use("/api",route)



//listening to port
app.listen(8000,()=>{
    console.log("App is running at port 8000")
})
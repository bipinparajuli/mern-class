const express = require("express");
const route = require('./route')
const app = express();


// app.post('/postdata',(req,res)) //save data 
// app.put() // existing data change or new save
// app.delete() // handle deleting operation on server



app.get("/",(req,res)=>{
    // console.log(req.body);
//res.send() = res.write + res.end()
    res.send("Hello World"); 
    res.send("Hello World");

    // res.write("<h1>Hello World </h1>")
    // res.write("<h1>Hello World </h1>")
    // res.end();
})

app.use("/api",route)
app.use("/newapi",route)




app.listen(8000,()=>{
    console.log('App is running at port 8000')
})



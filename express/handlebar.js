const app =  require("express")();
const {engine} = require("express-handlebars");

app.engine("handlebars",engine({

}));

app.set("view engine","handlebars");

app.get("/",(req,res)=>{
  res.render("index")  
})

app.get("/about",(req,res)=>{
    res.render("about")  
  })


app.listen(8000,()=>{
    console.log("App is running at port 8000");
})
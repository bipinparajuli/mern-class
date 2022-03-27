const express =  require("express")
const app =  require("express")();
const {engine} = require("express-handlebars");

app.use(express.static("public"));

app.engine("hbs",engine({
  layoutsDir:"views/layoutsss",
  defaultLayout:"abc",
  partialsDir:"views/abc",
  extname:"hbs"
}));

app.set("view engine","hbs");


app.get("/",(req,res)=>{
  res.render("index",{
  title:"Home",
  name:"Santosh",
  isAdmin:true,
  arr:[1,2,3,4,5]
})  

})

app.get("/about",(req,res)=>{
    res.render("about",{
      title:"About",
      name:{
        fname:"Someone",
        lname:"Sirname"
      },
      isAdmin:false
    })  
  })


app.listen(8000,()=>{
    console.log("App is running at port 8000");
})
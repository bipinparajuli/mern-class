// const {helloWorld} = require("./myfirstnodemodule.mjs")
// helloWorld(2,3)
// console.log(helloWorld(2,3));

// console.log("Hello World")

const fs = require("fs");
const path = require("path");
const http = require("http")
// fs.readFile('myfirstnodemodule.mjs','utf8',(err,data)=>{
//     if(err) console.log("ERROR",err);

//     // console.log('SUCCESS',data);
// })

// console.log("I may run first");

// let mydata = fs.readFileSync('myfirstnodemodule.mjs','utf8')

// console.log(mydata);

// console.log("I ALWASYS RUN AFTER MYDATA");

fs.writeFile('file.txt','Hello world',(err,data)=>{
    if(err) console.log(err);

    // console.log("file creation success");

})

fs.unlink("file.txt",(err)=>{
    if(err)console.log(err);

    // console.log("Successfully deleted");
})

fs.mkdir('home',(err,data)=>{

})

fs.rmdir('home',(err,data)=>{

})


//append 
//open

// const os = require('os')
// const path = require('path')

// let arc=os.arch()

// console.log(arc);

// console.log("PLATFROM ==>",os.platform());
// console.log("MEMEORY ==>",os.freemem());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.userInfo());


// console.log(os.networkInterfaces());

console.log(path.basename("/html/index.html"))
console.log(path.basename("app.js"))

//it gives directory in which file lies
console.log(path.dirname("/html/index.html"))

//gives extension of file system
console.log(path.extname("/html/index.html"))

console.log(path.extname("app.js"))

console.log(path.join('newpath','app.js'))

const PORT =8000;

http.createServer((req,res)=>{

    fs.readFileSync("index.html",'utf8',(err,data)=>{
        res.write(data)
    res.end()
    })

    

}).listen(8000,()=>{
    console.log(`Server running in port ${PORT}`)
})



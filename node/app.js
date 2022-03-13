// const {helloWorld} = require("./myfirstnodemodule.mjs")
// helloWorld(2,3)
// console.log(helloWorld(2,3));

// console.log("Hello World")

const fs = require("fs");

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

const os = require('os')

let arc=os.arch()

console.log(arc);

console.log("PLATFROM ==>",os.platform());
console.log("MEMEORY ==>",os.freemem());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.type());
console.log(os.userInfo());


// console.log(os.networkInterfaces());

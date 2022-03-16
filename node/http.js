//htpp module which helps to create http server
const { fstat } = require("fs");
const http = require("http");
const { connected } = require("process");

// let PORT = 8000

// const server = http.createServer((req,res)=>{
//     console.log(req.method);
// })

//different http method
console.log(http.METHODS);

// console.log(server);

//LOW LEVEL WORKING BASED ON DIFFERENT EVENT TRIGGERED 

// server.on("request",(req,res)=>{
//     res.write("Hello World");
//     res.end();
// })

// server.on("connection",(e)=>{

//     console.log("Connection Established");

// })

// server.on("request",())



// server.listen(PORT);

//
// http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url == "/"){
//         // res.write([1,2,3,4,5])
//         res.end()
//     }
//     else if(req.url == "/profile"){
//         res.write(JSON.stringify([{name:"someone",address:"kathmandu"}]))
//         // res.write(JSON.stringify([1,2,3,4,5]))

//         res.end()

//     }
// }).listen(8000,()=>{
//     console.log("Server started");
// })

// 100 -> information status code
// 200 -> success status code
// 300 -> redirectional status
// 400 -> clide side error status code
// 500 -> server side error status code

// EXTRACTING URL FORM REQUEST OBJECT

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.end(`<h1>My Current Route is => ${req.url} </h1> `)
// }).listen(8002)


// console.log(http.STATUS_CODES)

// GLobal object
// global object can be accessed inside whole program without requiring it

process.stdout.write("Hey")
process.stdout.write("Hey")

process.stderr.write("Error")

console.error("Error")

//gives current directory
console.log(__dirname);

//gives cureent filename
console.log(__filename);


 let path = fs.join(__dirname,"log.txt")

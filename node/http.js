//htpp module which helps to create http server
const http = require("http");

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
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        // res.write([1,2,3,4,5])
        res.end()
    }
    else if(req.url == "/profile"){
        res.write(JSON.stringify([{name:"someone",address:"kathmandu"}]))
        // res.write(JSON.stringify([1,2,3,4,5]))

        res.end()

    }
}).listen(8000,()=>{
    console.log("Server started");
})


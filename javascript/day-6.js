console.log("Hello World");

// Promise => Promise works like a real life promise that it will execute sometime. It has three state they are pending,fullfilled and reject

let myPromsie = new Promise(function(resolve,reject){
    if(true){
        // setTimeout(()=>{
        // resolve({name:"bipin"})

        // },5000)
    }else{
        reject("Oh!! i am rejected")
    }
})
// console.log(myPromsie);

myPromsie.then((message)=>console.log("Success",message),

            (errmessage)=>console.log("Error",err)

)


async function test(){
   let example= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hi")
    },5000)
   })

   console.log("hii");

//    let r = await example
   
//    console.log(example.then(e=>console.log(e)));

// return "HIIII"


}

test
// console.log(test().then(message=>console.log(message)));

let a = document.getElementById("a")

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
      console.log(response);
    return response.json()
  })
  .then(json => {
    a.innerText = json.title
  })



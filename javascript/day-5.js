// Es5
function myFunction(name,location){
    this.name = name;
    this.location=location
}


// console.log(obj.name);

function myFunction1(name,age){
    this.name = name;
    this.age=age
}

let obj = new myFunction("Santosh","Kathmandu")
let obj1 = new myFunction1("Sarthak",12)

let str = "abc"

console.log(obj);

// es6 class
class myError{
    constructor(name,location){
        this.SERVER_ERROR= name
        this.location= location
    }
}

class myNewCar extends myError{
    constructor(a,b){
        super(a,b) // => super call the parent constructor
     }
}



let car = new myNewCar("Jason","Jhapa")

console.log(car.name);
console.log(car.location);

// let h1 = document.getElementById("a").innerText
let h1 = document.getElementById("a")


h1.innerText = "New JS Class"
h1.style.color = "red"
h1.style.visibility = "hidden"

console.log(h1);

// Callback is basically passing function as an argument and call back later

function result(r){
    console.log(r);
    // <img src={r} />
}

function add (a,b,c){
    let sum = a+b
    c(sum)
}

add(3,5,result)

// asynchronous

setTimeout(function(){
    console.log("Hello MERN ");
},3000)

console.log("I am still running");

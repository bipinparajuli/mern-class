// String Operations 
// slice == substring

// console.log(n.slice(1,5))

// console.log(n.slice(3,5))

// console.log(n.substring(1,5))

// console.log(n.substring(3,5))

// console.log(n.slice(-8,-3))

// let n = "kathmandu"

// TODO

// console.log(n.substring(-2)); Always starts from 0 index to given length 


// console.log(n.substr(4,3));

// // template literal

// let xyz = "Mind Riser"

// // let location = "Putalisadak"

// //es5
// console.log("I instruct in " + xyz + " which locates at "+ location + ".")

// //es6
// console.log(`I instruct in ${xyz} which locates at ${location}.`)

// // Math in js
// console.log(Math.random() * 7 );

// let value = 3.50 

// console.log(value.toFixed(2))

// console.log(Math.floor(value))

// console.log(Math.ceil(value))

// console.log(Math.round(value))

// console.log(Math.PI.toFixed(2));

// console.log(Math.pow(3,3));

// //localstorage and session

// localStorage.setItem("name","bipin")


// console.log(localStorage.removeItem("name"));

// console.log(localStorage.getItem("name"));

// localStorage.clear()

// Session 

// sessionStorage.setItem("name","bipin")

// console.log(sessionStorage.getItem("name"))

// Date

let date = new Date()

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());

// switch case
switch(new Date().getDay()){
    case 1:
        console.log("Today is monday");
    case 2:
        console.log("Today is monday");
    case 5:
        console.log("Today is friday");
        break;
    default:
        console.log("something");

}

let name = "bipin"

switch(name){
    case "bipin":
        console.log(`${name} is Super Admin`);
        break;
    case "a":
        console.log(`${name} is Admin`);
        break;
    case "b":
        console.log(`${name} is User`);
        break;
    default:
        console.log("something");
}

if(true){
    //true
}else{
    //false
}
let a =15
if(a%2 === 0){
    console.log("even");
}else if(a%3 === 0 && a%5 === 0){

    if(a%3===0){
        console.log("Divisible by 3");
    }else{
        console.log("Divisible by 5");

    
    }
}

let z = 6

// === checks type and value strickly

console.log(z == "5");

console.log(z === 5);

//ternary operator (VVI)

z == 5 ? console.log("Value is five"):console.log("Not five")

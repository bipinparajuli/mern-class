// Map => It iterate over each element and perform some operation in it
// always create new array
//map always give new array of same length

// Filter => It helps to get new array based on given conditions
// filter output length may very on conditions
//
let arr = [1,2,3,4,5]
let data = [{name:"a"},{name:"b"},{name:"c"}];
let newarr=arr.map(element => {
return element + 2
} )

// console.log(newarr);

//filter 

let secondArray = arr.filter(element => element > 5)

// console.log(secondArray);

// Es6 let and const 
// var => var can be reassign and redeclare
// let => let can be reassign but can't redeclare
// const => const can nor be reassign nither be redeclare

// var a =10

// a=12

// var a = 17

// console.log(a);

// let b = 13 ;

// b = 12

// let b = 10

// console.log(b);

// const c=12;

// c=13

// const c = 13

// Scope => scopes define accessibility of varibales, functions and methods from diffrent place of program
// Global => variable outside functions are global variable
// function =>  scope  
// block => let and const are block scope

// {
//    let a = 10;
//    const b = 12;
//    console.log(a); 
// }

// console.log(a); 
// console.log(b);

// function fun(){
//     var c = 19;

// }

// console.log(c);

// console.log(a);

// function a(){
//     console.log("hey");
// }

let a =10;

function b(){

    function c(){

        function d(){
            // d has own environment + referenace to the lexical scope of parent env
            console.log(a);
        }
d()

}
c()

}
b()
// let obj = {
//     a:function(){

//     }
// }

let obj = new Object()
 
obj.name = "someone"

console.log(obj.name);

obj.setName = function(newname){
    this.name = newname
    console.log(this.name);
}

obj.setName("Anyone")

let ex = {name:"hey"}

let newex = JSON.stringify(ex)
console.log(newex);
console.log(JSON.parse(newex).name);

// HOF => 

function fun(){
    let a =10;
    return 10
    // return function fun1(){
//   sadsa
        // console.log("Hello");
    }
}

let r = fun()
///


//



//


//
r()
console.log(fun());





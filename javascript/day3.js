// let value = 12;
// console.log(typeof(value));
// let value = true;

// non-premitives => object 

// to declare object we use {} 

let obj = {
    name:"Someone",
    age:23,
    isAdmin:true,
    "my key":"hello this is test"
}

obj.location ="Kathmandu"

console.log(obj.name);
// delete obj.location
// console.log(obj.location);

console.log(obj["my key"]);
console.log(obj.my);

let a = {}

console.log(typeof(a));

// ==================================================================== 

//  Array => array is collectoin of hategogenous and homogenous element  

let arr =[1,2,3,"a","b","c"]
let arr1 = [true,false,true,false]
console.log(arr1);

let b = 'nepal'

b.toUpperCase()
// arr.reverse()

console.log(b);

console.log(arr[3]);

// Push => add to the end of array
//  Pop => removes from end of array
//  unshift => add to the begning of array
// shift => removes from begning of array

let c =[5,1,2,3,4]

// c.push(6)
// c.pop()
// c.unshift(0)
// c.shift()
// console.log(c);

// console.log(c.sort());
console.log(c.indexOf(1));

console.log(c.slice(1,4));

console.log(c.fill(100000,3));

let d =["a","b","c",[1,2,3,4,[5,6,7]]]

console.log(d.flat(2));

let e =[1,2,4]
let f = ""

console.log(Array.isArray(e));
console.log(Array.isArray(f));

//
// for while do while for of 

for(let i=0;i<5;i++){
    console.log(i);
}


// for(let i=0;i<city.length;i++){
//     console.log(city[i]);
// }

// for(let i=0;i<city.length;i++){
//     if( Array.isArray(city[i])){
//         for(let j=0;j<[1,2,3].length;j++){

//             console.log(city[i][j]);
            
//         }
//     }else{
//         console.log(city[i]);
//     }
// }

// while 

// let z =10
// while(z<5){
//     console.log(z);
// }

// do{
// console.log(z);
// }while(z<5)

let city = ["ktm","btm","pkr","brg",[1,2,3]]

for(let name of city){
    console.log(name);
}

// for(let i =0;i<100;i++){
//     return i
// } 

//generator
function* generator(){
    let i = 0;
    while(true){
        yield i;
        i++
    }

}

let gen = generator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// function 
let x =10
let y =20

function add(a,b){
    // console.log(a+b);
    return a+b
}

add(2,3)
let r = add(3,3)
console.log(r);
console.log(add(9,3));

var isEven = function(input){
    let output;
    if(input%2==0){
        output="Even";
    }else{
        output="Odd";
    }
    return output
}

let re = isEven(7)
console.log(re);

function add(a,b){
    // console.log(a+b);
    return a+b
}

let sum = (a,b) => {
    return a+b
} 

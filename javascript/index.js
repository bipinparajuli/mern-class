
// Primitive types 

// DATA TYPES 
//  1. Number ==> Integer Floating 
//  2. String ==> Character, String
//  3. Boolean ==> True/Flase

//  4. undefined
//  5. null
//  6. Object 
// 7. Bigint
// 8. Symbol
let a = 12

let b = 12.77
console.log(typeof(a));
console.log(typeof(b));

//string 

let c = "Hello World"
let d = 'd'
let e = 'My string'
let f = "My second string" + e
let g = `My third string ${f}` 

console.log(typeof(c));
console.log(typeof(d));
console.log(f);

let h = true
let i = false


console.log(typeof(h));
console.log(typeof(i));

let j = 10
let k = 2

console.log(j+k);
console.log(j-k);
console.log(j*k);
console.log(j/k);
console.log(k%j);
console.log(8%j);
// ===========================

// number + number = number 
// number + string = string 
// string + number = string 
// string + string = string 

let l = 12
let m = "12"

console.log(l+m);
console.log(m+l);
console.log(10 + "10" + 10);

console.log(1+1+1+'1');
console.log(2 - "1");
console.log(2 / "1");

let n ="9"
let o = "6"

console.log(n+o);
console.log(n-"hello");

console.log(10+'10'+10-1);

// + concat 

// BOOLEAN
//  true == 1
//  false == 0

console.log(1+true);
console.log(10/false);


// Alert, propt, Confirm

// let p = prompt("give me p")
// let q = prompt("give me q")

// let r = confirm("I gives true or false")

// console.log(r);

// alert(parseInt(p)+ parseInt(q))

let s = '10'
let t = '10'

let  u = "10.22"

console.log(parseInt(s) + parseInt(t));
console.log(parseFloat(u));

let v = Symbol(33)

console.log(typeof(v));



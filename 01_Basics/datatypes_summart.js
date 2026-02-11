// Primitive
// 7 types: string, number, boolean, null, undefined, bigint

const score = 100
const scoreValue = 100.3

const LoggedIn = false
const outsideTemp = null

/* both will give undefined */

// let userEmail; // undefined
let userEmail = undefined; 

// const bigNumber = 787878247809572839579425704n


// Non - Primitive (Reference Type)
// Array, objects, functions

// array 
const heroes = ["shaktiman", "naagaraj", "doga"]

// objects
let myObj = {
    name : "roman", 
    age: 68
}

// function
const myFunction = function(){
    console.log("Hello");
}

// to detect the type of datatypes
console.log(typeof(userEmail))

// ******* MEMORY ********

// Stack Memory(Primitive Data Type) & Heap Memory (Non-Primitive Data Type)

// Stack Memory
let myYoutubename = "heli"
let myname = myYoutubename
myname = "hello"
console.log(myYoutubename);
console.log(myname);

// Heap Memory 

let User1 = {
    name: "abc", 
    age: 12, 
    upi: "user1@ybl"
}

console.log(User1);





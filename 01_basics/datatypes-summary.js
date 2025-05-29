// Primitive

const { useInsertionEffect } = require("react");

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456346784628n



// Referece (Non primitive)

//Array, Objects, Function

const heros = ["fahad", "hania", "danial"]
let myObj =  {
    name: "ajwa",
    age: "20",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// JavaScript Data Types

// 1. String
let name = "Rakib";
console.log("String:", name);


// 2. Number
let age = 25;
let price = 99.99;
console.log("Number:", age, price);


// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent);


// 4. Undefined
let x;
console.log("Undefined:", x);


// 5. Null
let emptyValue = null;
console.log("Null:", emptyValue);


// 6. BigInt
let bigNumber = 12345678901234567890n;
console.log("BigInt:", bigNumber);


// 7. Symbol
let id = Symbol("userID");
console.log("Symbol:", id);


// 8. Object
let person = {
    name: "Rakib",
    age: 25,
    country: "Bangladesh"
};

console.log("Object:", person);


// 9. Array (Object type)
let fruits = ["Apple", "Banana", "Mango"];

console.log("Array:", fruits);


// Checking Data Types using typeof

console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof x);           // undefined
console.log(typeof emptyValue);  // object (JavaScript bug)
console.log(typeof bigNumber);   // bigint
console.log(typeof id);          // symbol
console.log(typeof person);      // object
console.log(typeof fruits);      // object
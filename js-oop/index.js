// Prototype - think "parent"

//.. think 'toString()' belonging to all objects - C# Object

let x = {};
let y = {};
//both reference object base / prototype

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true

// js engine walks up the prototype chain (child -> parent) until it finds the method you want

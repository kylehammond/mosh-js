// reference types
// Object (object literal)
let person = {
    firstName: 'Kyle',
    age: 35
}

console.log(person);

// Dot Notation
person.age = 40
console.log("Age: " + person.age);

// Bracket Notation
person['name'] = 'Mary';
console.log("Name: " + person.name);

// Dynamic Bracket
let selection = 'age';
console.log("Selection: " + person[selection]);


// Array (later...)
// Function (later...)
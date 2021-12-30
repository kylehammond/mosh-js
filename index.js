// Functions

// function greet() {
//     // body
//     console.log('Hello World');
// }

// greet();

//performing a task
function greet(firstName, lastName) {
  // body
  console.log("Hello " + firstName + " " + lastName);
}

greet(); // undefined
greet("John", "Babbon");
greet("Mary", "Gunderfiend");

// calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

// create a function 'sum' taking varying # of arguments and returns their sum
// 1 + args
// 1, 2, 3, 4 => 10
// challenge - modify to take an array and still return same thing
// Array.isArray() - true/false

// // my solution without array
// function sum(...numbers) {
//   return numbers.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum([1, 2, 3, 4]));

// // my solution with array
// function sum(numbers) {
//   let numbersCopy = [];

//   if (Array.isArray(numbers)) {
//     numbersCopy = numbers;
//   } else {
//     for (let number of arguments) numbersCopy.push(Number(number));
//   }

//   return numbersCopy.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log(sum([1, 2, 3, 4]));
// console.log(sum(1, 2, 3, 4));

// // his solution without array
// function sum(...items) {
//   return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4));

// his solution with array
// this all hinged on the fact that ... rest operator returns an array no matter what - but the first item was our test array of [1,2,3,4].
//  Also, you can spread into the current list to flatten.
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
console.log(sum(1, 2, 3, 4));

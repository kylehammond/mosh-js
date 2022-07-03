// function sum(a, b) {
//   // console.log(arguments); // returns a new object of parameters
//   return a + b;
// }

// console.log(sum(1, 2)); // 3
// console.log(sum(1)); // NaN - not a number  ( 1 + undefined )

// console.log(sum(1, 2, 3, 4, 5)); // 3
// // how would we do this?

function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // NaN - not a number  ( 1 + undefined )

console.log(sum(1, 2, 3, 4, 5)); // 3
// how would we do this?

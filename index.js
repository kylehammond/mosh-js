const numbers = [1, 2, -1, 3];

// let sum = 0;
// for (let n of numbers) sum += n;

// console.log(sum);

// for each item in the array, do the callback function
// let sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0 //init value
// );
// // accumulator = 0, currentValue = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5

// for each item in the array, do the callback function
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
console.log(sum);

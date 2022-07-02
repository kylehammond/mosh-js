// write a function like includes method - implement yourself
const numbers = [1, 2, 3, 4];
// console.log(numbers.includes(1));

// my solution 1
// function includes(array, searchElement) {
//   return array.some((n) => n === searchElement);
// }

// console.log(includes(numbers, 2));
// console.log(includes(numbers, 8));

// function includes(array, searchElement) {
//   for (let item of array) {
//     if (item === searchElement) return true;
//   }
//   return false;
// }

// console.log(includes(numbers, 2));
// console.log(includes(numbers, 8));

// his solution

// pretty much same

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(includes(numbers, 2));
console.log(includes(numbers, -1));

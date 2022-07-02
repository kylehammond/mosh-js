// make function countOccurrences(numbers,1) and count how many times that value exists
// first without reduce
// then with reduce

const numbers = [1, 2, 3, 4, 1, 8, 2, 0, -4];

// my solution without reduce
// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array) {
//     if (element === searchElement) count++;
//   }
//   return count;
// }

// my solution with reduce
// function countOccurences(array, searchElement) {
//   const count = array.reduce((previousValue, currentValue) => {
//     if (currentValue === searchElement) previousValue++;
//     return previousValue;
//   }, 0);
//   return count;
// }

// let count = [];
// count = countOccurences(numbers, 1);
// console.log(count);
// count = countOccurences(numbers, -1);
// console.log(count);
// count = countOccurences(numbers, -4);
// console.log(count);

// his solution without reduce
// same

// his solution with reduce
// function countOccurences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurence = current === searchElement ? 1 : 0;
//     return accumulator + occurence;
//   }, 0);
// }

// let count = [];
// count = countOccurences(numbers, 1);
// console.log(count);
// count = countOccurences(numbers, -1);
// console.log(count);

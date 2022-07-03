// getMax(numbers) - give array and return largest number in array
// implement without and with reduce()
const numbers = [1, 2, 3, 4, 1, 8, 2, 0, -4];

// my solution without reduce
function getMax(array) {
  return Math.max(...numbers);
}

// my solution with reduce
function getMaxWithReduce(array) {
  return array.reduce((accumulator, next) => {
    if (next > accumulator) accumulator = next;
    return accumulator;
  });
}

let max = [];
max = getMax(numbers);
console.log(max);

max = getMaxWithReduce(numbers);
console.log(max);

// his solution
function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

// his solution with reduce
function getMaxWithReduce(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}

let max = [];
max = getMax(numbers);
console.log(max);

max = getMaxWithReduce(numbers);
console.log(max);

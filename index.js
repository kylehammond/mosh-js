// write function arrayFromRange with min, max
// should return array of numbers asc in sort from min to max

// my solution
function arrayFromRange(min, max) {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

let numbers = arrayFromRange(1, 4);
console.log(numbers);
numbers = arrayFromRange(-10, -4);
console.log(numbers);

// his solution
function arrayFromRange2(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

const numbers2 = arrayFromRange2(1, 4);
console.log(numbers2);

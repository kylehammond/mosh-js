// new function 'except' returns a new array without the values provided
const numbers = [1, 2, 3, 4];

// my solution
function except(numbers, excluded) {
  let newNumbers = [];
  for (const num of numbers) if (!excluded.includes(num)) newNumbers.push(num);
  return newNumbers;
}

output = except(numbers, [1, 2]); // should be 3, 4
console.log(output);

// his solution

// basically same
function except2(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

output = except2(numbers, [1, 2]); // should be 3, 4
console.log(output);

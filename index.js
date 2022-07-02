const numbers = [1, 2, -1, 3];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

// could do arrow funcs
// const allPositive = numbers.every((value) => value >= 0);

console.log(allPositive);
console.log(atLeastOnePositive);

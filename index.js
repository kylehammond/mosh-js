const numbers = [1, 2, 3];

for (let number of numbers) console.log(number);
//1
//2
//3

numbers.forEach(function (number) {
  console.log(number);
});
//1
//2
//3

numbers.forEach((number) => console.log(number));
//1
//2
//3

// foreach allows index
numbers.forEach((number, index) => console.log(number, index));
//1 0
//2 1
//3 2

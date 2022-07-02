const numbers = [1,2,3,1,4];

console.log(numbers.indexOf('a')); //-1
console.log(numbers.indexOf(1)); //0
console.log(numbers.indexOf('1')); //-1
console.log(numbers.indexOf(5)); //-1

console.log(numbers.lastIndexOf(1)); //3 

console.log(numbers.indexOf(1) !== -1); //true
console.log(numbers.includes(1)) // true

console.log(numbers.indexOf(1, 2)); //3 - because we don't start looking at beginning of array

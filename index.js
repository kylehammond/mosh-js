// solution 1
let numbers1 = [1, 2, 3, 4];
let another = numbers1;

numbers1 = []; // would be GC'd normally but not if another ref to it

console.log(numbers1); // empty array
console.log(another); // still points to original reference - 1,2,3,4

// solution 2
let numbers2 = [1, 2, 3, 4];

numbers2.length = 0; // preferred

console.log(numbers2); // empty array

// solution 3
let numbers3 = [1, 2, 3, 4];

numbers3.splice(0, numbers3.length);

console.log(numbers3); // empty array

// solution 4
let numbers4 = [1, 2, 3, 4];

while (numbers4.length > 0) numbers4.pop(); // not recommended - bad perf

console.log(numbers4); // empty array

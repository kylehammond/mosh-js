// Control flow exercise 1
// function max(number1, number2) {
//   return number1 > number2 ? number1 : number2;
// }

// console.log(max(1, 2));
// console.log(max(2, 1));
// console.log(max(0, 0));
// console.log(max(5, -4));
// console.log(max(-5, -4));
// console.log(max(5, 5));

// Control flow exercise 2

// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(800, 600));
// console.log(isLandscape(4, 11));

// Control flow exercise 3
// if num divisible by 3, fizz
// if num divisible by 5, buzz
// if num divisible by 3 & 5, fizzbuzz
// else, return num

// function fizzBuzz(number) {
//   if (typeof number !== "number") return NaN;

//   return number % 3 === 0 && number % 5 === 0
//     ? "fizzbuzz"
//     : number % 3 === 0
//     ? "fizz"
//     : number % 5 === 0
//     ? "buzz"
//     : number;
// }

// console.log(fizzBuzz("hey there"));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(45));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(8));
// console.log(fizzBuzz(26));

// Control flow exercise 4
// for every 5 mph over, 1 point on license
// more than 12 pts, suspended
// Math.Floor(1.3) -> 1

// const speedLimit = 70;
// const mphPerPoint = 5;

// function checkSpeed(speed) {
//   if (speed < speedLimit + mphPerPoint) return "OK";

//   let pointsAccumulated = Math.floor((speed - speedLimit) / mphPerPoint);
//   return pointsAccumulated >= 12
//     ? "License Suspended"
//     : "Points Accumulated: " + pointsAccumulated;
// }

// console.log(0, checkSpeed(0));
// console.log(69, checkSpeed(69));
// console.log(70, checkSpeed(70));
// console.log(70.5, checkSpeed(70.5));
// console.log(74, checkSpeed(74));
// console.log(75, checkSpeed(75));
// console.log(80, checkSpeed(80));
// console.log(130, checkSpeed(130));
// console.log(134, checkSpeed(134));
// console.log(135, checkSpeed(135));

// Control flow execise 5

// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let message = i % 2 === 0 ? "even" : "odd";
//     console.log(i, message);
//   }
// }

// showNumber(5);

// Control flow exercise 6
// const array = [0, 1, 2, "", 3, undefined, NaN, false, 8, 2, null];

// function countTruthy(array) {
//   let countTruthy = 0;
//   for (let item of array) {
//     if (item) countTruthy++;
//   }
//   return countTruthy;
// }

// console.log(countTruthy(array));

// // falsy
// // undefined
// // null
// // ''
// // false
// // 0
// // NaN

// Control flow exercise 7
// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// function showStringProperties(object) {
//   for (let key in object) {
//     if (typeof object[key] === "string") {
//       console.log(key, object[key]);
//     }
//   }
// }

// showStringProperties(movie);

// Control flow exercise 8

// sum of all multiples of 3 and 5 up to limit
// input 10 - 3, 6, 9  + 5, 10  = 33
// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }

//   return sum;
// }

// console.log(sum(10));
// console.log(sum(5));

// Control flow exercise 9
// 0-59 - F
// 60-69 - D
// 70-79 - C
// 80-89 - B
// 90-100 - A

// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) {
//     sum += value;
//   }
//   return sum / array.length;
// }

// function calculateGrade(marks) {
//   let marksAverage = calculateAverage(marks);

//   if (marksAverage >= 90) return "A";
//   if (marksAverage >= 80) return "B";
//   if (marksAverage >= 70) return "C";
//   if (marksAverage >= 60) return "D";
//   return "F";
// }

// let marks = [80, 80, 50];
// console.log(calculateGrade(marks));

// marks = [40, 70, 60];
// console.log(calculateGrade(marks));

// marks = [60, 80, 60];
// console.log(calculateGrade(marks));

// marks = [90, 100, 100];
// console.log(calculateGrade(marks));

// marks = [100, 100, 100];
// console.log(calculateGrade(marks));

// Control flow exercise 10
// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let output = "";
//     for (let i = 0; i < row; i++) {
//       output += "*";
//     }
//     console.log(output);
//   }
// }

// showStars(5);
// showStars(10);

// Control flow exercse 11
// function showPrimes(limit) {
//   let factors = 0;
//   for (let i = 1; i <= limit; i++) {
//     if (limit % i === 0) factors++;
//   }
//   return factors < 3 ? "prime" : "non-prime";
// }

// console.log(showPrimes(1));
// console.log(showPrimes(4));
// console.log(showPrimes(12));
// console.log(showPrimes(13));

// Operators

// Arithmetic
// ======================================================
// let x = 10;
// let y = 3;

// console.log(x + y); // log an expression (something that produces a value)
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); // exponent, somewhat new?

// console.log(++x); // increment before logging

// console.log(x++); // increment after logging
// console.log(x); // increment after logging

// console.log(--y); // decrement before logging

// console.log(y--); // decrement after logging
// console.log(y); // decrement after logging

// Assignment
// ======================================================
// let x = 10;

// // both same
// x = x + 5;
// x += 5;

// // both same
// x = x * 3;
// x *= 3;

// Comparison
// ======================================================
// let x = 1;

// // - relational operators
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // - equality operators
// console.log(x === 1); // strict
// console.log(x !== 1); // strict
// console.log(1 == 1); // loose
// console.log(1 != 1); // loose

// // strict (use most of the time)
// console.log(x === 1); // true
// console.log("1" === 1); // false (because types diff)

// // loose
// console.log(1 == 1); // true
// console.log("1" == 1); // true
// console.log(true == 1); // true

// Ternary
// ======================================================

// // if a customer has more than 100 poitns,
// // gold customer
// // else, silver customer
// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// Logical
// ======================================================

// // logical AND  - true if both operands true
// console.log(true && true); // true

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); // true

// // logical OR - true if either operands true
// console.log(true || false); // true

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan); // true

// not operator
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// let applicationRefused = !eligibleForLoan;

// console.log("Application Refused: " + applicationRefused); // true

// logical operands with non-booleans
console.log(false || true); // true
console.log(false || "Kyle"); // Kyle
console.log(false || 1); // 1

// Falsy (false)
// - undefined
// - null
// - 0
// - false
// - ''
// - NaN   (not a number - not a valid number.. later in course)

// Truthy (true) ->  anything that isn't falsy
// if an operand is truthy, return THAT value, stop searching (short circuiting)

// real world example
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor); // blue

// Bitwise
// ======================================================

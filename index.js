// without default params

// function interest(principal, rate, years) {
//   rate = rate || 3.5; // if rate truthy use it, otherwise 3.5
//   years = years || 5;

//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, 3.5, 5));
// console.log(interest(10000));

// with default params (must be last params)

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));
console.log(interest(10000, undefined, 5)); // ugly workaround, must look at function to understand
// same result

//rest operator
function sum(discount, ...prices) {
  // console.log(args); // array of args - if you didn't have ... it would just show "1"
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// rest param must be last formal parameter
// the "rest" of the args

// refactor this to return error if first param is not valid array
// Error ""
// wrap calling code in try catch and log ex on the console

const numbers = [1, 2, 3, 4, 1, 8, 2, 0, -4];

// my solution
function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("First parameter must be array.");

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

try {
  let count = [];

  count = countOccurences(numbers, 1);
  console.log(count);
  count = countOccurences(numbers, -1);
  console.log(count);
  count = countOccurences("peanut", 1);
  console.log(count);
} catch (error) {
  console.log(error);
}

// his solution
// pretty much the same

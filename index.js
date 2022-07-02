const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined); //1,2,3,4,5,6
console.log(first); //1,2,3
console.log(second); //4,5,6

const slice = combined.slice(2, 4); // returns portion
console.log(combined); //1,2,3,4,5,6 - does not affect original
console.log(slice); //3,4

console.log(combined.slice(2)); //3,4,5,6
console.log(combined.slice()); //1,2,3,4,5,6

// primatives will be copied into arrays
// ref types will be pointing to originals

const firstO = [{ id: 1 }];
const secondO = [4, 5, 6];

const combinedO = firstO.concat(secondO);
firstO[0].id = 10; // if you change here, you also changed it in combinedO

const sliceO = combinedO.slice();

console.log(combinedO);
console.log(sliceO);

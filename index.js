const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"];
console.log(combined); //1,2,3,'a',4,5,6,'b'

// const copy = combined.slice();
const copy = [...combined]; // same
console.log(copy); //1,2,3,'a',4,5,6,'b'

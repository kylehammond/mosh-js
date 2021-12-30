// Loops

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while
let j = 0;
while (j < 10) {
  console.log(j++);
}

// do while
let k = 0;
do {
  console.log(k++);
} while (k < 10);

// infinite loops
// loops that never stop looping .. I skipped this part

// for-in (iterate over properties of array))
const person = {
  name: "Kyle",
  age: 35,
};

for (let key in person) {
  console.log("Key: " + key, "Value: " + person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(colors[index]);
}

// for-of (ES6 preferred) (iterate over the ITEMS of an array)
for (let color of colors) {
  console.log(color);
}

// break and continue
let l = 0;
while (l <= 10) {
  // if (l === 5) break;
  if (l % 2 === 0) {
    l++;
    continue;
  }

  console.log(l);
  l++;
}

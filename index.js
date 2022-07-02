// const numbers = [2, 3, 1];

// console.log(numbers.sort()); // array 1,2,3
// console.log(numbers.reverse()); // array 3,2,1

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];

console.log(courses.sort()); // no change

console.log(
  courses.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
); // CASE MATTERS HERE ascii values... "javascript" will come after "Node.js" but "Javascript" won't
// he fixed this with the touppercase

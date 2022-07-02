const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" })); // false - b/c ref is not same

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// function(course) is callback function
console.log(
  courses.find(function (course) {
    return course.name === "a";
  })
); // returns the object

// arrow function version of same thing (using predicate)
console.log(courses.find((course) => course.name === "a")); // returns the object with id of 1

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" })); // false - b/c ref is not same

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
console.log(courses.find((c) => c.id === 1)); // returns the object with id of 1

// function(course) is callback function
console.log(
  courses.find(function (course) {
    return course.name === "a";
  })
); // returns the object

console.log(
  courses.find(function (course) {
    return course.name === "xyz";
  })
); // undefined

console.log(
  courses.findIndex(function (course) {
    return course.name === "a";
  })
); // 0

console.log(
  courses.findIndex(function (course) {
    return course.name === "xyz";
  })
); // -1

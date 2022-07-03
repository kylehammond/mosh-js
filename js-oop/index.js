// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const circle = new Circle(1);
circle.draw();

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

// another way to make a function

// const Circle1 = new Function(
//   "radius",
//   `this.radius = radius;
// this.draw = function () {
//   console.log("draw");
// }`
// );

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // Shape(color); // doesn't work because 'this' is pointing to Window global object
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // best practice so you don't lose the original constructor

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1, "red");

console.log(c);

// (without inheritance)
// equivalent ways to construct a new Circle object
// new Circle(1)
// Circle.prototype.constructor(1)

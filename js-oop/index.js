function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // best practice so you don't lose the original constructor

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

console.log(c);

// (without inheritance)
// equivalent ways to construct a new Circle object
// new Circle(1)
// Circle.prototype.constructor(1)

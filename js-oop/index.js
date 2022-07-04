function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype = Object.create(object.prototype); // before
Circle.prototype = Object.create(Shape.prototype); // after

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

console.log(c);

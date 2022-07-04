function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape); // extend circle with shape

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape); // extend circle with shape

const s = new Shape("green");
const c = new Circle(1, "red");
const sq = new Square(10);

console.log(s);
console.log(c);
console.log(sq);

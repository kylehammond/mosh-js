function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

// must be AFTER superclass method
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); // call superclass/base method first

  console.log("duplicate circle");
};

const c = new Circle();

console.log(c);

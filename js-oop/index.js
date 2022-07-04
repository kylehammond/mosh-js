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
  console.log("duplicate circle");
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate(); // will call the proper implementation depending on object type

// // the old, non-polymorphism way
// for (let shape of shapes)
// {
//   if (shape.type === 'circle'){
//     duplicateCircle();
//   }
//   else if (shape.type === 'square'){
//     duplicateSquare(); //standalone functions not part of object
//   }
//   else
//     duplicateShape();
// }

// const c = new Circle();
// const sq = new Square();

// console.log(c);
// console.log(sq);

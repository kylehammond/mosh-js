// function Circle(radius) {
//   this.radius = radius;

//   this.draw(log("draw"));
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(c1);
// console.log(c2);
// // now there exists many copies of the same function draw

function Circle(radius) {
  // instance members
  this.radius = radius;
  this.move = function () {
    this.draw(); // js engine will find this on the prototype
    console.log("move");
  };
}

const c1 = new Circle(1);
const c2 = new Circle(1);

//prototype members
Circle.prototype.draw = function () {
  // this.move();
  console.log("draw");
}; // this moves

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

console.log(c1.toString()); //Circle with radius 1
// console.log(c1.draw()); // move  draw (with move in draw())
console.log(c1.move()); // draw  move (with draw in move())

console.log(c1);
console.log(c2);
// now there no draw function on the c1 or c2, it's in the prototype

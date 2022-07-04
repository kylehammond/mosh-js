function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype members
// could be done on any line
Circle.prototype.draw = function () {
  console.log("draw");
};

console.log(Object.keys(c1)); // instance/"own" members

for (let key in c1) console.log(key); // instance/"own" and prototype members

console.log(c1.hasOwnProperty("radius")); // true
console.log(c1.hasOwnProperty("draw")); // false b/c proto

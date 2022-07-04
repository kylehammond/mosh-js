// Object.getPrototypeOf(myObj);

// myObj.__proto__ (parent of myObj)
// Constructor.prototype () -> parent of myObj from above

function Circle(radius) {
  this.radius = radius;
}

console.log(Circle.prototype);

const circle = new Circle(1);

let obj = {};
console.log(Object.prototype);

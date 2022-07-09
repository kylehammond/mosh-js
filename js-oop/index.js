// old

// function Circle(radius){
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   }
// }

// newer
class Circle {
  constructor(radius) {
    this.radius = radius;

    this.move = function () {}; // object instance only
  }

  // part of prototype
  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);
console.log(c.draw());

console.log(typeof Circle); // function   - class is a type of function

//babeljs.io
//use to convert new JS to old

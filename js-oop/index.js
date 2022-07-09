// const Circle = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };

// const c = new Circle();
// // method call - call method on an object - points to 'c' as this
// c.draw();

// const draw = c.draw;
// // function call - call like standalone function not part of an obj - by default, this is Window/Global
// draw();

// ====================================

// "use strict";
// const Circle = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };

// const c = new Circle();
// // method call
// c.draw();

// const draw = c.draw;
// // function call - with strict will give you undefined
// draw();

// ====================================
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw(); // undefined - STRICT by default with ES6 syntax

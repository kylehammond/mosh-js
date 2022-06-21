// objects / OOP

// // factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const factoryCircle = createCircle(1);
// factoryCircle.draw();

// // constructor function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const constructedCircle = new Circle(1);
// constructedCircle.draw();

// built in object constructor function

let x = {};
// let x = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3

// every object has a constructor property referencing the object used to create that function

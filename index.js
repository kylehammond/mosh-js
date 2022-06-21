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

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// equivalent?
// const Circle1 = new Function(
//   "radius",
//   `
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// `
// );

// const circle = new Circle1(1);

Circle.call({}, 1); // like a constructor
Circle.apply({}, [1, 2, 3]); // apply changes to an array

const another = new Circle(1);

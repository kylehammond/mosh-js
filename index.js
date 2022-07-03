// // let x = 0;
// // var y = 0;  // to be avoided

// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       let color = "red";
//     }
//   }

//   console.log(color);
//   // console.log(i); // with let, i not defined
//   // with var, i is accessible still ... scoped to FUNCTION

//   // before ES6, var only way
//   // ES6 + - let, const => block scoped
// }

// start();

var color = "red"; // global variable in WINDOW object
let age = 30; // global variable NOT attached in WINDOW object

// globally in WINDOW .. will eventually encapsulate in modules
function sayHi() {
  console.log("hi");
}

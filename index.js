// {
//   const message = "hi";
// }
// console.log(message); // message not available in scope (outside of the code block)

// // scope limited to block in which defined

// function start() {
//   const message = "hi";
//   if (true) {
//     const another = "bye";
//   }

//   return another;
// }
// // console.log(message); // message not available in scope (outside of the code block)
// start(); //another not defined
// // scope limited to block in which defined

// function start() {
//   const message = "hi";
//   if (true) {
//     const another = "bye";
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); // not in scope
//   return another;
// }
// // console.log(message); // message not available in scope (outside of the code block)
// start(); //another not defined
// // scope limited to block in which defined

// function start() {
//   const message = "hi";
// }
// function stop() {
//   const message = "bye";
// }

// start(); // all good because message defined in two different scopes

// const color = "red"; // accessible in all functions

// function start() {
//   const message = "hi";
//   console.log(color);
// }
// function stop() {
//   const message = "bye";
// }

// start(); // all good because message defined in two different scopes

const color = "red"; // accessible in all functions - should be avoided

function start() {
  const message = "hi";
  const color = "blue"; // blue takes precedence
  console.log(color);
}
function stop() {
  const message = "bye";
}

start(); // all good because message defined in two different scopes

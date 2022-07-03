// Function Declaration
walk(); // can call before defined

function walk() {
  console.log("walk");
} // will be HOISTED by the javascript engine -
// will be moved to top of script

// Function Expression
run(); // can NOT call before defined - Uncaught ReferenceError: can't access lexical declaration 'run' before initialization
// just like how you can't use a var before its defined

let run = function () {
  console.log("run");
};

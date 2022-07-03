// Function Declaration
function walk() {
  console.log("walk");
}

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

// Named Function Expression
let runNamed = function runNamed() {
  console.log("run named");
};

walk();
run();
runNamed();

let move = run;
move();

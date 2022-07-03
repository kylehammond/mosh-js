function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {};

  this.draw = function () {
    computeOptimumLocation(0.1);

    console.log("draw");
  };
}

const circle = new Circle(10);

// closure:  when a function is in a function - it can access items in the inner function and its parent function
// closure is of the child function - things in closure (only the parent things) will stay in memory unlike the scope (child things)

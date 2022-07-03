// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const factoryCircle = createCircle(1);
factoryCircle.draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const constructorCircle = new Circle(1);
constructorCircle.draw();

console.log("factory constructor", factoryCircle.constructor);
console.log("constructor constructor", constructorCircle.constructor);

// every object has a constructor property - referencing the constructor that was used to create the object

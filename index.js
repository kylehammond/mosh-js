// objects / OOP

// factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
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

const circle = new Circle(1);
circle.draw();

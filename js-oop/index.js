function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  console.log(key); // radius draw
}

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]); // only radius
}

const keys = Object.keys(circle);
console.log(keys); // array ["radius","draw"]

if ("radius" in circle) console.log("Circle has a radius"); // circle has..

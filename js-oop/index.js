class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // instance method
  draw() {}

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1);
console.log(circle); // circle.parse will not be available on circle
// Circle.parse(); // accessible here

const circle2 = Circle.parse('{ "radius": 1 }');
console.log(circle2);

// Math class is an example of something with lots of static methods called like Math.log

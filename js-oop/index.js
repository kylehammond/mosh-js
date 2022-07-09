class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // have to call or it will throw exception because you didn't call super's const
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const c = new Circle("blue", 1);
console.log(c);
// Circle {}
// [[Prototype]]: Shape
// constructor: class Circle
// draw: ƒ draw()
// [[Prototype]]: Object

c.move();
c.draw();

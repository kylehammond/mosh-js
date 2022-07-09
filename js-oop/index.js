class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    super.move(); // optional
    console.log("move override");
  }
}

const c = new Circle();
console.log(c);
c.move();

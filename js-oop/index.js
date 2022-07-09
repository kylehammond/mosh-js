const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

const c = new Circle(10);
c.draw();
console.log(_radius.get(c)); // can do because it's all in the same file

// no modules in ES5..
// most popular module formats used then
// AMD - browser (legacy)
// CommonJS - node.js
// UMD - browser/node.js  (legacy)

// ES6 Modules are native

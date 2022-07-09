const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // getRadius() {
  //   return _radius.get(this);
  // }

  // doesn't have to be this way
  // Object.defineProperty(this, 'radius', {
  //   get...
  // })

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);
// console.log(c.getRadius());  // ok.. but would rather read like c.radius
console.log(c.radius); // nice
c.radius = 3;
console.log(c.radius); // 3, new value

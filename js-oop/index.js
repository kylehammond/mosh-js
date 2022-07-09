const _radius = Symbol(); // a unique identifier - new one every time called - NOT a constructor method
const _draw = Symbol();
class Circle {
  constructor(radius) {
    // this._radius = radius; // approach 1 - some name things with _ and assume it's private / no one will see it as public

    // this.radius = radius;
    // this['radius'] = radius;

    // using symbols
    this[_radius] = radius;
  }

  // method made with computed property name
  [_draw]() {}

  // _draw();
}

const c = new Circle(1);
console.log(c);
//c.??? // there's no radius

// don't do this...
console.log(Object.getOwnPropertyNames(c)); // gets you nothing
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); // hack/workaround to get value of radius.. returns 1

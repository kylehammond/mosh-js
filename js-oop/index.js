const _radius = new WeakMap(); //essentially dict where keys are obj and vals can be anything .. if keys are not used they will be GC'd (weak)
const _move = new WeakMap();

// you could put all of this in ONE weakmap but it may be hard to call

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // returns move undefined
    // the 'this' part returns as undefined because it's by default strict
    // _move.set(this, function () {
    //   console.log("move", this);
    // });
    // returns this correctly as Circle
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)(); // () at the end is because it returns a function, then you call with ()
  }
}

const c = new Circle(1);
console.log(c);
c.draw(); // gets you 1

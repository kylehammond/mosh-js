// write a circle object using object literal syntax including radius that you can read/write  and an area property that is read only

// my solution
let circle = {
  radius: 0,
  area: 0,
  get area() {
    return Math.pow(Math.PI * this.radius, 2);
  },
};

console.log(circle.radius); //gets init value
circle.radius = 2; // write works
console.log(circle.radius); // gets updated value
console.log(circle.area); // gets calculated value
circle.area = 50000; // no change
console.log(circle.area); // still gets calculated value

// his solution

const circle1 = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 2;
console.log(circle.area);
console.area = 20;
console.log(circle.area);

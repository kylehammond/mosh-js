function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.location = { x: 1 }; //same
circle["location"] = { x: 1 }; //same, but useful for dynamically accessing property name

const propertyName = "location";
console.log(circle[propertyName]); // dynamic access

// can also use for properties with bad names
const otherPropertyWithBadChars = "center-location property";

// you can remove properties that you don't want sent to the client such as password, etc
delete circle.location;
delete circle[otherPropertyWithBadChars];

// ex of use:
// user.token = 'sadfasdf';

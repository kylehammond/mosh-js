// objects / OOP

function createCircle(radius) {
  return {
    radius, //equivalent to radius: radius,
    draw() {
      console.log("draw");
    },
    // equivalent
    // draw: function () {
    //   console.log("draw");
    // },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

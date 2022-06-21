// objects / OOP

const circle = {
  radius: 1,
};

circle.color = "yellow"; // dynamically add properties
circle.draw = function () {}; // dynamically add functions

delete circle.color; //dynamically remove properties
delete circle.draw; //dynamically remove functions

console.log(circle);

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// const another = {};

// for (let key in circle){
//   another[key] = circle[key];  // another['radius'] = circle['radius']; and so on
// }

// console.log(another); // radius: 1, draw: draw()...



// const another = Object.assign({},circle);
// console.log(another); // radius: 1, draw: draw()...



// const another = Object.assign({
//   color:'yellow'
// },circle);
// console.log(another); // color: "yellow", radius: 1, draw: draw()...

const another = { ...circle}; //spread operator 
console.log(another); // radius: 1, draw: draw()...
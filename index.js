const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

for (let key in circle) {// for in
  // console.log(key); //radius, draw
  console.log(key, circle[key]) // radius 1, draw > function draw () length :0 ... 
}

for (let key of circle) {//for of
  console.log(key); //type error circle is not iterable 
}


// you CAN iterate the keys of circle with for of with Object.keys(circle)
for (let key of Object.keys(circle)) {//for of
  console.log(key); // radius, draw  
}

for (let entry of Object.entries(circle)) {//for of
  console.log(entry); //Array["radius",1], Array["draw",draw()..]
}

if ('radius' in circle) console.log('yes'); // yes
if ('color' in circle) console.log('yes'); // no
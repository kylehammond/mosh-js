// let x = 10;
// let y = x; // COPY (value type)

// x = 20;

// // x: 20
// // y: 10


// let x = { value: 10 };
// let y = x;  // copy REFERENCE (reference type)

// x.value = 20;

// // x: 20
// // y: 20 < because it holds ref to x


let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);  // 10 - because it was just a copy


let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // 11 - because its reference was passed in


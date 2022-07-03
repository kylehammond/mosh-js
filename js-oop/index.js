let x = 10;
let y = x;

x = 20;

console.log(y); //10 - points to original x reference in memory

let x = { value: 10 };
let y = x;

x.value = 20;

console.log(y); //{value: 20} - points to currently referenced memory

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // 10 - you increased it only local to the increase method

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj.value); // 11 - you increased the obj that was passed by ref

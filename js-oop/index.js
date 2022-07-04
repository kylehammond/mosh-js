let person = { name: "Mosh" };

// console.log(person);
// console.log(person.toString()); // works

// for (let key in person) console.log(key); // no toString or other things from Object base

// let objectBase = Object.getPrototypeOf(person);

// console.log(Object.getOwnPropertyDescriptor(objectBase, "toString"));
// //Object { value: toString(), writable: true, enumerable: false, configurable: true }

// // enumerable: false means we can't loop over

Object.defineProperty(person, "name", {
  // get: function(){}
  // set: function(){}
  writable: false,
  enumerable: false,
  configurable: false,
});

person.name = "John";

console.log(person.name); //Mosh - not changed
for (let key in person) console.log(key); // nothing, because only prop is not enumerable

delete person.name; // nothing happens, not configurable
console.log(person.name); //Mosh - not changed

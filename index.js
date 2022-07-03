const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  // fullName() {} // equivalent to fullName: function(){}
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const nameParts = value.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
};

console.log(`${person.firstName} ${person.lastName}`); // what if you want to do this over and over?

// getters => access properties
console.log(person.fullName);

// setters => change (mutate) them
person.fullName = "Kyle Hammond";
console.log(person.fullName);

console.log(person);

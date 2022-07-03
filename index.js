const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const nameParts = value.split(" ");
    if (nameParts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
};

try {
  person.fullName = "";
} catch (error) {
  alert(error);
}

console.log(person);

// const e = new Error(); // can do - but just an object
// throw e; // now it is an exception

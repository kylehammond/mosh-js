// compare two objects for equality

function Address(street, city, state, zipCode){
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

let address1 = new Address('a','b','c','d');
let address2 = new Address('a','b','c','d');

//write an equality operator for values AND reference of the object

// my solution
function areEqual(address1,address2){
  // values are the same
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.state === address2.state &&
    address1.zipCode === address2.zipCode 
  );
}

function areSame(address1,address2){
  // are pointing to same reference/object
  return (address1 === address2);
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// his solution

// same!!

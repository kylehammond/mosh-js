// let address = {
//   street: '123 Sesame Street',
//   city: 'Bumfeck',
//   state: 'WY',
//   zipCode: '54321'
// }

// initialize an address object using a factory function and then using a constructor function

// my solution

// factory
function createAddress(street, city, state, zipCode){
  return {
    address: {
      street,
      city,
      state,
      zipCode
    }
  }
}

const factoryAddress = createAddress('123 Sesame Street','Bumfeck','WY','54321');
console.log(factoryAddress);

// constructor
function Address(street, city, state, zipCode){
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

const constructedAddress = new Address('123 Sesame Street','Bumfeck','WY','54321');
console.log(constructedAddress);

// factory
function createAddress(street, city, state, zipCode){
  return {
    street,
    city,
    state,
    zipCode
  }
}

const factoryAddress = createAddress('123 Sesame Street','Bumfeck','WY','54321');
console.log(factoryAddress);

// constructor
function Address(street, city, state, zipCode){
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

const constructedAddress = new Address('123 Sesame Street','Bumfeck','WY','54321');
console.log(constructedAddress);
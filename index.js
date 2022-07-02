// make a new object
// street
// city
// zipCode
// showAddress(address) show all properties and their value

// my solution
let address = {
  street: '123 Sesame Street',
  city: 'Bumfeck',
  state: 'WY',
  zipCode: '54321',
  showAddress() {
      console.log(
      `${this.street} ${this.city}, ${this.state} ${this.zipCode}`);
  }
}

address.showAddress();

// his solution
let address2 = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
}

function showAddress(address2) {
  for (let key in address2)
    console.log(key, address2[key]);
}

showAddress(address2);
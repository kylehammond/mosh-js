// mozilla string docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// String primitive
const message = 'This is my first message';

// String object
const another = new String('This is my second message');

console.log(typeof message);  //string
console.log(typeof another);  //object

console.log(message.length); // 24
console.log(another.length); // 25

console.log(message[0]); //T
console.log(another[0]); //T
console.log(message[1]); //h

console.log(message.includes('my')); //true
console.log(message.startsWith('This')); //true
console.log(message.startsWith('this')); //false, case sensitive

console.log(message.endsWith('e')); //true

console.log(message.indexOf('my')); //8
console.log(message.replace('first','third')); // returns NEW string, does not modify original - This is my third message

console.log(message.toUpperCase); //THIS IS MY FIRST MESSAGE
console.log(message.toLowerCase); //this is my first message
console.log(message.trim); //trims..


//escape characters are a thing, too

console.log(message.split(' ')); // array of words

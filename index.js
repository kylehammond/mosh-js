const numbers = [1, 2, 3];

const joined = numbers.join(",");
console.log(joined); //1,2,3

const message = "this is my first message";
const messageParts = message.split(" ");
console.log(messageParts); // array of these words

const combinedMessage = messageParts.join("-");
console.log(combinedMessage); // this-is-my-first-message  (useful for url slugs)

console.log(joined.split(",")); // array of "1", "2", "3"

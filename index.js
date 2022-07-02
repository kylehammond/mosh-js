const numbers = [1, 2, -1, 3];

const filteredNumbers = numbers.filter((n) => n >= 0);

const items = filteredNumbers.map((n) => "<li>" + n + "</li>");

console.log("<ul>" + items.join("") + "</ul>"); //<li>1</li><li>2</li><li>3</li>

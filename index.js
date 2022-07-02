const numbers = [3,4];
// numbers = []; // invalid assignment to const 'numbers'

// End
numbers.push(5, 6);
console.log(numbers); // 3, 4, 5, 6

// Beginning
numbers.unshift(1, 2);
console.log(numbers); // 1, 2, 3, 4, 5, 6

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers); // 1, 2, 'a', 'b', 3, 4, 5, 6

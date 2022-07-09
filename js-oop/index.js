// a refresher

sayHello(); // valid to call before written because it is hoisted to top
sayGoodbye(); // 'sayGoodbye is not defined' - just like a variable

// function declaration  (hoisted)
function sayHello() {}

// function expression (not hoisted)
const sayGoodbye = function () {};

// class declaration
const c = new Circle(); // 'Circle is not defined'  - classes are not hoisted

// most people will use this syntax
class Circle {}

// class expression
const Square = class {};

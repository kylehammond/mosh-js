// implement a stack using es6 classes
// a stack is a special kind of data structure like a physical stack or pipe

// count prop on object
// prototype methods
// push - add top
// pop - remove top
// peek - return top of stack

// push('a')
// push('b')
// push('c')

//const stack = new Stack()

// pop() "stack is empty" if empty
// peek() "stack is empty" if empty

// my solution

// const _stack = new WeakMap();
// class Stack {
//   constructor() {
//     _stack.set(this, []);
//   }

//   count = 0;

//   push(obj) {
//     let stack = _stack.get(this);
//     stack.push(obj);
//     this.count++;
//   }
//   pop() {
//     let stack = _stack.get(this);
//     if (stack.length <= 0) throw new Error("Stack is empty");
//     stack.pop();
//     this.count--;
//   }
//   peek() {
//     let stack = _stack.get(this);
//     if (stack.length <= 0) throw new Error("Stack is empty");
//     return stack[stack.length - 1];
//   }
// }

// const stack = new Stack();

// his solution

const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    let stack = _items.get(this).push(obj);
  }
  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    items.pop();
  }
  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    return items[items.length - 1];
  }

  get count() {
    _items.get(this).length;
  }
}

const stack = new Stack();

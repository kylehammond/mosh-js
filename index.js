// new function called move that moves an item at a given index a given number of items away
// if the offset amount takes them item outside the bounds of the array, throw error - invalid offset
const numbers = [1, 2, 3, 4];

// my solution
// function move(array, index, offset) {
//   let newArray = [...array];

//   if (index + offset > newArray.length || index + offset < 0) {
//     console.error("Invalid offset.");
//   } else {
//     let valueToMove = newArray[index];
//     let newIndex = index + offset;

//     if (offset >= 0) {
//       newArray.splice(newIndex, 0, valueToMove);
//       newArray.splice(index, 1);
//     } else {
//       newArray.splice(index, 1);
//       newArray.splice(newIndex, 0, valueToMove);
//     }
//     return newArray;
//   }
// }

// let output = [];
// output = move(numbers, 0, 1);
// console.log(output);
// output = move(numbers, 0, 4);
// console.log(output);
// output = move(numbers, 1, -1);
// console.log(output);
// output = move(numbers, 1, -2);
// console.log(output);

// his solution
function move(array, index, offset) {
  const position = index + offset;
  if (position > array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  let output = [...array];

  const element = output.splice(index, 1)[0]; // returns just deleted element
  output.splice(position, 0, element);

  return output;
}

let output = [];
output = move(numbers, 0, 1);
console.log(output);
output = move(numbers, 0, 4);
console.log(output);
output = move(numbers, 1, -1);
console.log(output);
output = move(numbers, 1, -2);
console.log(output);

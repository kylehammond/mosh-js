Array.prototype.shuffle = function () {
  // ..
};

const array = [];
array.shuffle();

// should not modified built in objects in JS
// don't modify objects you don't own
// because a library you add may do that and they would collide OR
// because JS could add that in the future

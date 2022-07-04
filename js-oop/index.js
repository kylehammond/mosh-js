function mixin(target, ...sources) {
  Object.assign(target, ...sources); // spread, not rest
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

//mixins
function Person() {}

mixin(Person.prototype, canEat, canWalk); // copy props and objs from one to another

const person = new Person();
console.log(person.eat());
console.log(person.walk());

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish.eat());
console.log(goldfish.swim());

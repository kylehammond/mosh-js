//create two objects
//HtmlElement
//HtmlSelectElement (drop down list)
// prototypical inheritance between them
// should have methods:

// HtmlElement
// click: function
// focus: function //prototype

// HtmlSelectElement
// takes items array
// has addItem, removeItem

// do not use extend - if you set your prototype to the prototype of the parent you won't get the instance methods click (you would get focus though)

// my solution
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items) {
  this.items = items === undefined ? [] : items;
  this.addItem = function (item) {
    items.push(item);
  };
  this.removeItem = function (item) {
    items.splice(items.indexOf("2"), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();

const e = new HtmlElement();
const se = new HtmlSelectElement(["1", "2"]);

e.click();
e.focus();

console.log(se.items);
se.addItem("3");
console.log(se.items);
se.removeItem("2");
console.log(se.items);
se.click();
se.focus();

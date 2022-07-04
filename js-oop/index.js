// extend htmlselectelement and implement a render() method
// render an html select/option list
// create an htmlimageelement that inherits from htmlelement that can be clicked,focused, and renders its own way
// optionally pass/set a src ... 'http://'
// render an html img ... img src="http://" />

// render should return strings

// finally, create array of elements of htmlselectelement(1,2,3) and htmlImageElement('http://') and call render on each

// my solution
// function HtmlElement() {
//   this.click = function () {
//     console.log("clicked");
//   };
// }

// HtmlElement.prototype.focus = function () {
//   console.log("focused");
// };

// function HtmlSelectElement(items = []) {
//   this.items = items;
//   this.addItem = function (item) {
//     this.items.push(item);
//   };
//   this.removeItem = function (item) {
//     this.items.splice(this.items.indexOf("2"), 1);
//   };
//   this.render = function () {
//     const html = `
// <select>
//   ${this.items.map((i) => `<option>${i}</option>`).join(`
//   `)}
// </select>`;
//     return html;
//   };
// }

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// function HtmlImageElement(src) {
//   this.src = src;
//   this.render = function () {
//     return `<img src='${src} />`;
//   };
// }

// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;

// const e = new HtmlElement();
// const se = new HtmlSelectElement(["1", "2", "3"]);
// const i = new HtmlImageElement("http://www.goobles.com");

// const elements = [
//   new HtmlSelectElement(["1", "2", "3"]),
//   new HtmlImageElement("http://www.goobles.com"),
// ];

// for (let element of elements) {
//   console.log(element.render());
//   // element.click();
//   // element.focus();
// }

// his solution
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf("2"), 1);
  };
  this.render = function () {
    return `
<select>
  ${this.items.map((item) => `<option>${item}</option>`).join("")}
</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src='${this.src} />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const e = new HtmlElement();
const se = new HtmlSelectElement(["1", "2", "3"]);
const i = new HtmlImageElement("http://www.goobles.com");

const elements = [
  new HtmlSelectElement(["1", "2", "3"]),
  new HtmlImageElement("http://www.goobles.com"),
];

for (let element of elements) {
  console.log(element.render());
  // element.click();
  // element.focus();
}

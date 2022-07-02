// inexpensive, moderate, pricy, etc from Yelp price ranges on restaraunts
// create an array of objs - each object is PriceRange
// what properties would you see in PriceRange?

// my solution

// I missed the part about an array and also that this was mostly just a modeling exercise 
// so my solution was coming from a weird perspective.. trying to calculate what range a price was in
// rather than modeling what prices were in a range

function PriceRange(minPrice, maxPrice){
  this.minPrice = minPrice;
  this.maxPrice = maxPrice;
  if (maxPrice <= 5) {this.rangeType = '$'}
  else if (maxPrice <= 10) {this.rangeType = '$$'}
  else if (maxPrice > 10) {this.rangeType = '$$$'}

}

const priceRange1 = new PriceRange(0,5);
const priceRange2 = new PriceRange(0,6);
const priceRange3 = new PriceRange(0,9);
const priceRange4 = new PriceRange(0,10);
const priceRange5 = new PriceRange(0,11);
const priceRange6 = new PriceRange(0,21);
const priceRange7 = new PriceRange(0,654);

console.log(priceRange1.rangeType);
console.log(priceRange2.rangeType);
console.log(priceRange3.rangeType);
console.log(priceRange4.rangeType);
console.log(priceRange5.rangeType);
console.log(priceRange6.rangeType);
console.log(priceRange7.rangeType);



// his solution
let priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

// could be used like..
let restaraunts = [
  { averagePerPerson: 5}
]
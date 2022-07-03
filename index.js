// write code to get all the movies in 2018 with rating > 4
// sort by their rating in desc order
// only pick the title property and display it on the console:
// expected result:
// 'b'
// 'a'

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// my solution
console.log(
  movies
    .filter((m) => m.rating > 4 && m.year === 2018)
    .reverse((m) => m.rating) // apparently needed comparison
    .map((m) => m.title)
);

// his solution
console.log(
  movies
    .filter((m) => m.rating > 4 && m.year === 2018)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title)
);

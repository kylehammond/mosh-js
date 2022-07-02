// create a blog post object with these props:  
//title, body, author, views (times viewed), comments (each has author, body), isLive (booL)
// use obj literal syntax to create an init

// my solution
let blogPost1 = {
  title: "Banana fight",
  body: "Some people don't understand the value of a neat banana aisle in the grocers.",
  author: "Hip guy",
  views: 488424,
  comments: [{
    author: "Sheila",
    body: "Calm down"
  },
  {
    author: "Bob",
    body: "LOL"
  },
  {
    author: "Jimothy",
    body: "I'm not a bot"
  } ],
  isLive: true
};

let blogPost2 = {
  title: "Karate",
  body: "Today I took a step at protecting myself and have signed up for karate.",
  author: "Hip guy",
  views: 4542,
  comments: [{
    author: "Bob",
    body: "You'll be a black belt in no time!"
  },
  {
    author: "Sheila",
    body: "You need to spend more time at home with me."
  },
  {
    author: "Jimothy",
    body: "I'm not a bot"
  } ],
  isLive: true
};

let blogPost3 = {
  title: "It happened again!",
  body: "I was out shopping for gourmet bananas and I got into my third fight of the week.",
  author: "Hip guy",
  views: 488424,
  comments: [{
    author: "Bob",
    body: "You have it EXACTLY right!  People like that NEED to be taught manners!"
  },
  {
    author: "Sheila",
    body: "You have it so wrong!  Someone needs to think of the bananas.. SMH"
  },
  {
    author: "Jimothy",
    body: "I'm not a bot"
  } ],
  isLive: true
};

console.log(blogPost1);
console.log(blogPost2);
console.log(blogPost3);

// his solution
let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [{
    author: 'a',
    body: 'b'
  },
  {
    author: 'a',
    body: 'b'
  }],
  isLive: true
};

console.log(post);
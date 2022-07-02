// use a constructor function
// imagine building blogging engine - user drafting post but has not published yet
// what should constructor look like?

// my solution
function DraftPost(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.isLive = false;
}

const draftPost = new DraftPost('My post title', 'The body of the post being drafted','Kyle');
console.log(draftPost);

// his solution
function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post('a','b','c');
console.log(post);
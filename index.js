// this - references the object that is executing the current function

// if this -> refs that
// method -> obj
// function -> global (window)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  // showTags() {
  //   this.tags.forEach((tag) => console.log(this, tag)); // this function is an anon callback and points to Window!!
  // },
  showTags() {
    this.tags.forEach((tag) => console.log(this, tag), this); // this puts you in the context of the video again.  not all methods in JS allow passing in this context.
  },
  // method (because in obj, this references this obj)
  play() {
    console.log(this);
  },
};

// // method - references video
// video.stop = function () {
//   console.log(this);
// };

video.play();
// video.stop();

// functions reference Window

function playVideo() {
  console.log(this);
}
playVideo(); // logs Window object

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("a"); // logs Video object

video.showTags();
// a  b  c  listed

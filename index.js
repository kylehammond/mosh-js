// this - references the object that is executing the current function

// if this -> refs that
// method -> obj
// function -> global (window)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // non preferred approach
    // const self = this; // some use 'that'
    // this.tags.forEach(function (tag) {
    //   return console.log(self.title, tag);
    // }); // this puts you in the context of the video again.  not all methods in JS allow passing in this context.

    // second solution
    // this.tags.forEach(
    //   function (tag) {
    //     console.log(this.title, tag);
    //   }.bind(this)
    // ); // this puts you in the context of the video again.  not all methods in JS allow passing in this context.

    // new ES6 preffered way
    this.tags.forEach((tag) => console.log(this.title, tag)); // always points to what you used
  },
  play() {
    console.log(this);
  },
};

video.showTags();

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: "Mosh" }, 1, 2); // ref specified obj
// playVideo.apply({ name: "Mosh" }, [1, 2]); // ref specified obj
// playVideo.bind({ name: "Mosh" })(); // gives you back new function pointing to your obj
// // () at the end calls it .. just like .call()

// playVideo(); // ref Window

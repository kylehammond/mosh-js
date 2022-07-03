//design a stopwatch object

//duration: 0
//reset()
//start() // can't call if started
//stop() // can't call if stopped

// my solution
// function Stopwatch() {
//   let duration = 0;
//   let startTime = "";
//   let stopTime = "";
//   let running = false;

//   this.reset = function () {
//     duration = 0;
//     startTime = "";
//     stopTime = "";
//     running = false;
//   };
//   this.start = function () {
//     if (running) throw new Error("Already running");
//     startTime = Date.now();
//     running = true;
//   };
//   this.stop = function () {
//     if (!running) throw new Error("Not started");
//     stopTime = Date.now();
//     running = false;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       duration += (stopTime - startTime) / 1000;
//       return duration;
//     },
//     set: function (value) {
//       duration = value;
//     },
//   });
//   Object.defineProperty(this, "startTime", {
//     get: function () {
//       return startTime;
//     },
//     set: function (value) {
//       startTime = value;
//     },
//   });
//   Object.defineProperty(this, "stopTime", {
//     get: function () {
//       return stopTime;
//     },
//     set: function (value) {
//       stopTime = value;
//     },
//   });
// }

// const sw = new Stopwatch();

// his solution

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {},
  });
}

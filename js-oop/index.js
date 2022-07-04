// take stopwatch and move start/stop/reset to prototype (as an optimization technique)
// this will lead to a new issue to work on with accessibility of running, startTime, etc
// - need to define as public readonly property and access with "this."

// my solution
// function Stopwatch() {}

// Stopwatch.prototype.startTime = 0; // shouldn't have done these - made it not readonly
// Stopwatch.prototype.stopTime = 0;
// Stopwatch.prototype.running = 0;
// Stopwatch.prototype.duration = 0;

// Stopwatch.prototype.start = function () {
//   if (this.running) throw new Error("Stopwatch has already started.");
//   this.running = true;
//   this.startTime = new Date();
// };
// Stopwatch.prototype.stop = function () {
//   if (!this.running) throw new Error("Stopwatch is not started.");
//   this.running = false;
//   this.endTime = new Date();

//   const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
//   this.duration += seconds;
// };
// Stopwatch.prototype.reset = function () {
//   this.startTime = null;
//   this.endTime = null;
//   this.running = false;
//   this.duration = 0;
// };

// const sw = new Stopwatch();

// his solution
function Stopwatch() {
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      // this is a bad idea - now ANYONE can just change this regardless of the timer
      duration = value;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started.");
  this.running = true;
  this.startTime = new Date();
};
Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started.");
  this.running = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};
Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

const sw = new Stopwatch();

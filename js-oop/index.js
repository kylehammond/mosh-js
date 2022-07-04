// take stopwatch and move start/stop/reset to prototype (as an optimization technique)
// this will lead to a new issue to work on with accessibility of running, startTime, etc
// - need to define as public readonly property and access with "this."

// my solution
function Stopwatch() {}

Stopwatch.prototype.startTime = 0;
Stopwatch.prototype.stopTime = 0;
Stopwatch.prototype.running = 0;
Stopwatch.prototype.duration = 0;

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

// his solution

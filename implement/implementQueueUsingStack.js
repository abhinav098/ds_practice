var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];

  this.setQueue = function () {
    let length = this.stack1.length;
    for (let i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }
  };

  this.unsetQueue = function () {
    let length = this.stack2.length;
    for (let i = 0; i < length; i++) {
      this.stack1.push(this.stack2.pop());
    }
  };

  return this;
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  this.setQueue();
  let top = this.stack2.pop();
  this.unsetQueue();
  return top;
};

MyQueue.prototype.peek = function () {
  this.setQueue();
  let top = this.stack2[this.stack2.length - 1];
  this.unsetQueue();
  return top;
};

MyQueue.prototype.empty = function () {
  this.setQueue();
  return this.stack2.length === 0;
};

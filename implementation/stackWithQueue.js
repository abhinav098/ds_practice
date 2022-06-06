class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    let s = this.queue.length;
    this.queue.push(x);
    while (s > 0) {
      this.queue.push(this.queue.shift());
      s--;
    }
  }

  pop() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    console.log(this.queue);
  }
}

let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());
stack.push(5);
console.log(stack.print());
stack.push(6);
console.log(stack.print());

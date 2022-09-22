class CustomStack {
  constructor() {
    this.stack = [];
    this.min = Number.POSITIVE_INFINITY;
  }

  getMin() {
    return this.stack[this.stack.length - 1][1];
  }

  top() {
    return this.stack[this.stack.length - 1][0];
  }

  pop() {
    return this.stack.pop()[0];
  }

  push(num) {
    this.min = Math.min(num, this.min);
    this.stack.push([num, this.min]);
  }
}

let cs = new CustomStack();
for (let i of [1, 2, 5, 3, 0, 4, 0, 1]) {
  cs.push(i);
}

console.log(cs.getMin());
console.log(cs.top());
console.log(cs.pop());
console.log(cs.pop());
console.log(cs.pop());
console.log(cs.getMin());
console.log(cs.pop());

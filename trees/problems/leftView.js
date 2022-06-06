class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.val = value;
  }
}

class Tree {
  root;
  constructor() {}

  createTree() {
    this.root = new Node(11);
    this.root.left = new Node(9);
    this.root.right = new Node(15);
    this.root.left.left = new Node(7);
    this.root.left.right = new Node(10);
    this.root.left.left.left = new Node(4);
    this.root.right.left = new Node(12);
    this.root.right.right = new Node(16);

    return this.root;
  }

  getRoot() {
    return this.root;
  }

  leftSideView() {
    const root = this.root;
    if (!root) return [];
    let queue = [[root, 0]];
    let res = [];

    while (queue.length > 0) {
      let [curr, level] = queue.shift();

      if (!res[level]) res[level] = curr.val;

      if (curr.left) queue.push([curr.left, level + 1]);
      if (curr.right) queue.push([curr.right, level + 1]);
    }

    return res;
  }

  rightSideView() {
    const root = this.root;
    if (!root) return [];
    let queue = [[root, 0]];
    let res = [];

    while (queue.length > 0) {
      let [curr, level] = queue.shift();

      res[level] = curr.val;

      if (curr.left) queue.push([curr.left, level + 1]);
      if (curr.right) queue.push([curr.right, level + 1]);
    }

    return res;
  }

  topView() {
    const root = this.root;
    if (!root) return [];
    let queue = [[root, 0]];
    let leftView = [];
    let rightView = [];
    let result = [];

    while (queue.length > 0) {
      let [curr, level] = queue.shift();

      if (leftView[level] === undefined) leftView[level] = curr.val;
      rightView[level] = curr.val;

      if (curr.left) queue.push([curr.left, level + 1]);
      if (curr.right) queue.push([curr.right, level + 1]);
    }

    let i = leftView.length - 1;
    while (i > 0) {
      result.push(leftView.pop());
      i--;
    }

    i = 0;
    while (i <= rightView.length) {
      result.push(rightView.shift());
      i++;
    }

    return result;
  }
}

let tree = new Tree();
tree.createTree();
let root = tree.getRoot();
// console.log(tree.leftBottomToRightBottom());
console.log(tree.leftSideView());
console.log(tree.rightSideView());
console.log(tree.topView());

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

root = new Node(11);
root.left = new Node(9);
root.right = new Node(15);
root.left.left = new Node(7);
root.left.right = new Node(10);
root.left.left.left = new Node(4);
root.right.left = new Node(12);
root.right.right = new Node(16);

// recursive
const postOrder = (node) => {
  if (node === null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
};

// Iterative
const postOrderIter = (root) => {};

console.log("----------");
console.log(postOrder(root));
console.log("++++++++++++");
console.log(postOrderIter(root));

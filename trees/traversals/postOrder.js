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

// for postOrder iterative, we have to move to the
// right most element and then come back to the left
const postOrderIter = (root) => {
  if (root === null) return;
  let current = root;
  const treeStack = [];
  const result = [];

  while (current !== null || treeStack.length > 0) {
    if (current != null) {
      treeStack.push(current);
      result.push(current);
      current = current.right;
    } else {
      current = treeStack.pop();
      current = current.left;
    }
  }

  while (result.length > 0) {
    let r = result.pop();
    console.log(r.value);
  }
};

console.log("----------");
console.log(postOrder(root));
console.log("++++++++++++");
console.log(postOrderIter(root));

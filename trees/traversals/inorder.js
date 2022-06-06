class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// recursive
const inOrder = (node) => {
  if (node === null) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
};

const inOrderIter = (node) => {
  // return if current node is null
  if (node == null) return;
  let current = node;
  const treeStack = [];

  while (current != null || treeStack.length > 0) {
    while (current != null) {
      treeStack.push(current);
      current = current.left;
    }

    current = treeStack.pop();
    console.log(current.value);
    current = current.right;
  }
};

root = new Node(11);
root.left = new Node(9);
root.right = new Node(15);
root.left.left = new Node(7);
root.left.right = new Node(10);
root.left.left.left = new Node(4);
root.right.left = new Node(12);
root.right.right = new Node(16);

console.log("----------");
console.log(inOrder(root));
console.log("++++++++++++");
console.log(inOrderIter(root));

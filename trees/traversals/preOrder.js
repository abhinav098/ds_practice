class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const preOrderIter = (root) => {
  if (root == null) return;
  let current = root;
  const treeStack = [];
  while (current != null || treeStack.length > 0) {
    while (current != null) {
      treeStack.push(current);
      console.log(current.value);
      current = current.left;
    }

    current = treeStack.pop();
    current = current.right;
  }
};

const preOrder = (node) => {
  if (node === null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
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
console.log(preOrder(root));
console.log("++++++++++++");
console.log(preOrderIter(root));

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

const minPathSum = (root) => {
  if (root === null) return Number.POSITIVE_INFINITY;
  if (root.left == null && root.right == null) return root.value;
  return Math.min(minPathSum(root.left), minPathSum(root.right)) + root.value;
};

console.log(minPathSum(root));

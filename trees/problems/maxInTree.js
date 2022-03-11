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

const maxBfs = (root) => {
  if (root === null) return [];
  let queue = [root];
  let max = Number.NEGATIVE_INFINITY;
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    max = Math.max(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return max;
};

const maxDfs = (root) => {
  if (root === null) return Number.NEGATIVE_INFINITY;
  return Math.max(maxDfs(root.left), maxDfs(root.right), root.value);
};

console.log(maxDfs(root));

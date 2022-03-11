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

const minBfs = (root) => {
  if (root === null) return [];
  let queue = [root];
  let min = Number.POSITIVE_INFINITY;

  while (queue.length > 0) {
    const current = queue.shift();
    min = Math.min(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
};

const minDfs = (root) => {
  if (root === null) return Number.POSITIVE_INFINITY;
  return Math.min(minDfs(root.left), minDfs(root.right), root.value);
};

console.log(minDfs(root));

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

function treeSumDfs(root) {
  if (root === null) return 0;
  return treeSumDfs(root.left) + root.value + treeSumDfs(root.right);
}

function treeSumBfs(root) {
  if (root === null) return 0;
  let queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
}

console.log(treeSumBfs(root));

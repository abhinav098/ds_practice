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

const bfs = (root) => {
  if (root === null) return [];
  let queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
};

console.log(bfs(root));

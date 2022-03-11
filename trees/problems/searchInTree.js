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

function searchDfs(root, target) {
  if (root === null) return false;
  if (root.value == target) return true;
  return searchDfs(root.left, target) || searchDfs(root.right, target);
}

function searchBfs(root, target) {
  if (root === null) return false;
  let queue = [root];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current.value == target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}

// console.log(searchBfs(root, 0));

console.log(searchDfs(root, 10));

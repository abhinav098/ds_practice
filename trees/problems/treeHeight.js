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

const minHeightBfs = (root) => {
  if (root === null) return [];
  let queue = [[root, 1]];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current[0].left === null && current[0].right === null) {
      return current[1];
    } else {
      queue.push([current[0].left, current[1] + 1]);
      queue.push([current[0].right, current[1] + 1]);
    }
  }

  return min;
};

console.log("min height:", minHeightBfs(root));

const maxHeightBfs = (root) => {
  if (root === null) return [];
  let queue = [[root, 1]];
  let maxHeight = Number.NEGATIVE_INFINITY;
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    if (current[0].left === null && current[0].right === null) {
      maxHeight = Math.max(maxHeight, current[1]);
    } else {
      if (current[0].left) queue.push([current[0].left, current[1] + 1]);
      if (current[0].right) queue.push([current[0].right, current[1] + 1]);
    }
  }

  return maxHeight;
};

console.log("max Height", maxHeightBfs(root));

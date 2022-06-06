class Node {
  constructor(val, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

const findCousins = (root, target) => {
  if (root === null) return null;

  let level = findLevel(root, target);
  console.log(level);
};

const findLevel = (root, target, level = 0) => {
  if (root === null) return level;
  return findLevel(root.left, level + 1) + findLevel(root.right, level + 1);
};

//     1 ===> 0
//   2 ===>1   3 ===> 1
// 4  5   6 7

const reverseTree = (node) => {
  if (node === null) return null;

  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);

    let temp = current.left;
    current.left = current.right;
    current.right = temp;
  }

  return node;
};

let node = new Node(1);
node.left = new Node(2);
node.left.left = new Node(4);
node.left.right = new Node(5);

node.right = new Node(3);
node.right.left = new Node(6);
node.right.right = new Node(7);
target = node.right.right;

// console.log(node);
console.log(findLevel(node, target));

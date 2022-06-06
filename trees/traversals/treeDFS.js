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

const dfsIter = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    result.push(curr.value);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return result;
};

console.log(dfsIter(root));

// const dfs = (root) => {
//   if (root === null) return [];

//   const left = dfs(root.left);
//   const right = dfs(root.right);
//   return [root.value, ...left, ...right];
// };

// console.log(dfs(root));

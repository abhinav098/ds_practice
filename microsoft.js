// Given a rotated array which is sorted search for an element in it
// Given two linked lists that represent two big numbers (numbers that can not be stored in an int or long long int), write a function that adds the numbers and store the result in a third list.
// Clone a linked list with next and arbitrary (or random) pointer
// Validate a given IP address

// correct a bst with two nodes swapped
// detect a cycle in a linked list
// LCA of BT
// check if BT is height balanced or not
// find the only repeating number from the array[1-n] where all other elemens are appearing once.
// Check if a Binary Tree is BST or not
// Remove duplicates from a string
// Connect nodes at same level
// Run length encoding

const constructTree = (treeArr, i) => {
  let root = null;
  if (i < treeArr.length) {
    root = new TreeNode(treeArr[i]);
    root.left = constructTree(treeArr, 2 * i + 1);
    root.right = constructTree(treeArr, 2 * i + 2);
  }

  return root;
};

class TreeNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log(constructTree([1, 2, 3, 4, 5, 6], 0));

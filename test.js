// You are climbing a staircase.
// It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

// n = 2
// n >= 1

// n = 1 2 3

const climbing = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 0) return 0;
  if (n === 0) return 1;

  memo[n] = climbing(n - 1, memo) + climbing(n - 2, memo);
  return memo[n];
};

const climbingStairs = (n) => {
  let dp = new Array(n + 1).fill(0);
  if (n === 0 || n === 1) {
    return 1;
  }

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbing(4));
console.log(climbingStairs(4));

// You are given a perfect binary tree where all leaves are on the same
// level, and every parent has two children.
// The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]

const pointNext = (root) => {
  if (root === null) return null;

  let queue = [[root, 0]];
  let prevNode = null;

  while (queue.length > 0) {
    let [current, level] = queue.shift();

    if (prevNode && prevNode[1] === level) {
      prevNode[0].next = current;
    }
    prevNode = [current, level];

    if (current.left) queue.push([current.left, level + 1]);
    if (current.right) queue.push([current.right, level + 1]);
  }

  return root;
};

// Given an array of ages (integers) sorted lowest to highest,
// output the number of occurrences for each age.
// For instance:
// [8,8,8,9,9,11,15,16,16,16]
// should output something like:
// 8: 3
// 9: 2
// 11: 1
// 15: 1
// 16: 3

// This should be done in less than O(n).
// arr = [8, 8, 8, 9, 9, 11, 15, 16, 16, 16];
// k = 10/4

// start = 0 3 5 7
// end = 2 4 7 9
// result = [8]

const getAges = (arr) => {
  if (arr === null || arr.length === 0) return [];
  let result = [];
  let k = Math.floor(arr.length / 4);

  let start = 0;
  let end = start + k;

  while (end < arr.length) {
    if (arr[start] === arr[end]) {
      result.push(arr[start]);
      start = end + 1;
      end = start + k;
    } else {
      start = getFirstOccurence(arr, arr[end], start, end);
      end = start + k;
    }
  }

  return result;
};

const getFirstOccurence = (arr, target, start, end) => {
  let index = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      index = mid;
      end = mid - 1;
    }
  }

  return index;
};

// arr = [8, 8, 8, 9, 9, 11, 15, 16, 16, 16];
// console.log(getAges(arr));

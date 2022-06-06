// leetcode #2200

var findKDistantIndices = function (nums, key, k) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(i - j) <= k && nums[j] === key) {
        result.push(i);
      }
    }
  }
  return result;
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));

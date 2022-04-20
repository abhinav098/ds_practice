const maxSumSizeKBrute = (nums, k) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < k; j++) {
      currentSum = currentSum + nums[i + j];
    }
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

const maxSumSizeK = (nums, k) => {
  let n = nums.length;
  if (n < k) {
    return -1;
  }

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currentSum = maxSum;
  for (let i = k; i < n; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(maxSumSizeK([2, 3, 1, 0, 5, -1, 4], 3));

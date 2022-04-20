const twoSumComp = (target, nums) => {
  const comps = new Set();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (comps.has(nums[i])) {
      result.push([nums[i], target - nums[i]]);
    } else {
      comps.add(comp, i);
    }
  }
  return result;
};

const bruteForce = (target, nums) => {
  let maxSum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let comb = [];
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum <= target && sum >= maxSum) {
        maxSum = sum;
        comb = [];
        comb.push(nums[i], nums[j]);
      }
    }
    if (comb.length > 0) {
      result.push(comb);
    }
  }
  return result;
};

var twoSumLessThanK = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let answer = -1;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < target) {
      // answer = sum
      answer = Math.max(answer, sum);
      left++;
    } else {
      right--;
    }
  }
  return answer;
};
// for (let i = 0; i < nums.length; i++) {
//   let comb = [];
//   for (let j = i + 1; j < nums.length; j++) {
//     let sum = nums[i] + nums[j];
//     if (sum < target && sum >= maxSum) {
//       maxSum = sum;
//     }
//   }
// }

arr = [
  199, 914, 110, 900, 147, 441, 209, 122, 571, 942, 136, 350, 160, 127, 178,
  839, 201, 386, 462, 45, 735, 467, 153, 415, 875, 282, 204, 534, 639, 994, 284,
  320, 865, 468, 1, 838, 275, 370, 295, 574, 309, 268, 415, 385, 786, 62, 359,
  78, 854, 944,
];
target = 200;

console.log(twoSumLessThanK(arr, target));

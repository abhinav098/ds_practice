const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

const twoSumBinary = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    const compIndex = binarySearch(nums, target - nums[i], start, end);
    if (compIndex >= 0) {
      return [i, compIndex];
    }
  }
  return [-1, -1];
};

const binarySearch = (nums, target, start, end) => {
  if (start > end) {
    return -1;
  }
  const mid = parseInt(start + (end - start) / 2);

  if (nums[mid] == target) {
    return mid;
  } else if (target > nums[mid]) {
    return binarySearch(nums, target, mid + 1, end);
  } else {
    return binarySearch(nums, target, start, mid - 1);
  }
};

const twoSumComp = (nums, target) => {
  const comps = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (comps.has(nums[i])) {
      return [comps.get(nums[i]), i];
    } else {
      comps.set(comp, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 13, 15, 21, 23, 43, 100, 123, 150], 9));
console.log(twoSumBinary([2, 7, 11, 13, 15, 21, 23, 43, 100, 123, 150], 10));
console.log(twoSumComp([2, 7, 11, 13, 15, 21, 23, 43, 100, 123, 150], 9));

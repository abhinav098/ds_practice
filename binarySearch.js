const main = () => {
  const nums = [1, 5, 2, 7, 8, 3, 9, 10];
  const target = 9;
  const start = 0;
  const end = nums.length - 1;
  const sorted_nums = nums.sort((a, b) => a - b);
  const index = binarySearch(sorted_nums, target, start, end);
  console.log(index, nums[index] == target);
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

main();

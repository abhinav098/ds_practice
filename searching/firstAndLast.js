var searchRange = function (nums, target) {
  const result = [-1, -1];
  result[0] = binarySearch(nums, target, true);
  if (result[0] !== -1) {
    result[1] = binarySearch(nums, target, false);
  }

  return result;
};

const binarySearch = (nums, target, first) => {
  let index = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      index = mid;
      if (first) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return index;
};

console.log(
  searchRange([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8], 6)
);

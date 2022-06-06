arr = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

const findMagicIndex = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid === arr[mid]) {
      return mid;
    } else if (arr[mid] > mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(findMagicIndex(arr));

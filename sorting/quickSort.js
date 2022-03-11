// destructuring code ES6 to swap elements
const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    // find pivot index
    const pIndex = partition(arr, start, end);

    // divide the array into two sub arrays
    // leftArr left of pivot
    quickSort(arr, start, pIndex - 1);
    // rightArr right of pivot
    quickSort(arr, pIndex + 1, end);
  }
  return arr;
};

const partition = (arr, start = 0, end = arr.length - 1) => {
  let pIndex = start;
  const pivot = arr[pIndex];
  for (let i = start + 1; i <= end; i++) {
    //Move all the small elements on the left side
    if (arr[i] < pivot) {
      pIndex++;
      swap(arr, i, pIndex);
    }
  }
  swap(arr, start, pIndex);
  return pIndex;
};

arr = [5, 2, 7, 1, 3, 9, 8, 6, 4];
console.log(quickSort(arr));

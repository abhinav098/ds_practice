const bubbleSort = (arr) => {
  if (!arr.length) {
    return [];
  }
  // bool to know if any element was swapped in one of the passes.
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    // break if not swapped anything
    // means that the array is sorted already
    if (!swapped) {
      break;
    }
  }

  return arr;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

arr = [4, 2, 3, 1, 5, 6, 7];
console.log(bubbleSort(arr));

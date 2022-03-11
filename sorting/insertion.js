const insertionSort = (arr) => {
  if (!arr.length) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  console.log(arr);
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

arr = [5, 2, 7, 1, 3, 9];
insertionSort(arr);

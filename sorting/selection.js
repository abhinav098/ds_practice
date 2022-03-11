const selectionSort = (arr, order) => {
  let minIndex = 0;
  let maxIndex = 0;
  if (!arr && !arr.length) {
    return [];
  }

  if (order === "asc") {
    for (i = 0; i < arr.length; i++) {
      minIndex = i;
      for (j = i; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
  } else if (order === "desc") {
    for (i = 0; i < arr.length; i++) {
      maxIndex = i;
      for (j = i; j < arr.length; j++) {
        if (arr[maxIndex] < arr[j]) {
          maxIndex = j;
        }
      }
      swap(arr, i, maxIndex);
    }
  } else {
    return "Incorrect order passed, specify either 'asc' or 'desc'";
  }

  return arr;
};

// destructuring code ES6 to swap elements
const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};

arr = [5, 2, 7, 1, 3, 9];
console.log(selectionSort(arr, "asc"));

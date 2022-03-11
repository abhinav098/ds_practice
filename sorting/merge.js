const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid, arr.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }

  // add remaining items to the resultant list
  return result.concat(
    leftArray.slice(leftIndex),
    rightArray.slice(rightIndex)
  );
};

arr = [6, 3, 7, 4, 2, 5];
console.log(mergeSort(arr));

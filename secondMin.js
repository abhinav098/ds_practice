const secondSmallest = (arr) => {
  let smallest = Number.POSITIVE_INFINITY;
  let secondSmallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
};

arr = [6, 1, 2, 3, 5];

console.log(secondSmallest(arr));

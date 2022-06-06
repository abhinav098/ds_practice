const cyclicSort = (arr) => {
  if (!arr.length) {
    return false;
  }

  // correct index of the current value should be equal
  // to arr[i] - 1 because the range is from 1 to n
  // in case range is from 0 to n the correct index of
  // current value should be arr[i]
  // for eg arr[i] = 5; the correct index for
  // arr[i] should be 5 if the range is 0 to n
  // and correct index for arr[i] = 5 should be
  // arr[i] - 1 if the range is 1 to n

  // for (let i = 1; i < arr.length; i++) {
  //   let correct = arr[i] - deduct;
  //   if (arr[i] != arr[correct]) {
  //     swap(i, correct, arr);
  //   }
  // }

  let x = [3, 1, 2, 4, 5, 6];
  // correct position for 3 = arr[2] - 1 /// 3 - 1 => 2

  let deduct = arr.includes(0) ? 0 : 1;

  // another way of doing it
  for (let i in arr) {
    let correct = arr[i] - deduct;
    if (arr[i] != arr[correct]) {
      swap(i, correct, arr);
    }
  }

  return arr;
};

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const arr = [5, 4, 2, 3, 1, 6];
console.log(cyclicSort(arr));

const subArr0 = (arr) => {
  let prefixSumArr = new Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    prefixSumArr[i + 1] = prefixSumArr[i] + arr[i];
  }

  console.log(prefixSumArr);

  for (let i = 0; i <= prefixSumArr.length; i++) {}
  return false;
};

let arr = [4, 2, -3, 1, 6];
console.log(subArr0(arr));

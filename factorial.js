const fact = (n) => {
  if (n === 1) return 1;
  return n * fact(n - 1);
};

// console.log(fact(25));

const reverseString = (s) => {
  let sArr = s.split("");
  for (let i = 0, j = sArr.length - 1; i <= j; i++, j--) {
    [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
  }
  s = sArr.join("");
  console.log(s);
};

// reverseString("abhi");

const findMissing = (arr) => {
  let n = arr.length;
  if (arr[0] != 1) {
    return 1;
  }

  let start = 0;
  let end = n - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > mid + 1) {
      if (arr[mid] - arr[mid - 1] > 1) {
        return arr[mid] - 1;
      }
      end = mid - 1;
    } else if (arr[mid] === mid + 1) {
      if (arr[mid + 1] - arr[mid] > 1) {
        return arr[mid] + 1;
      }
      start = mid + 1;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 6, 7, 8, 10];
console.log(findMissing(arr));

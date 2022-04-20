number = 1775;

let convertToString = (n) => {
  let numberArr = [];
  while (n != 0) {
    numberArr.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  return numberArr.join("");
};

let longestSubsequence = (n) => {
  let binaryString = convertToString(n);
  let canFlip = true;
  let lastZero;
};

console.log(convertToString(number));

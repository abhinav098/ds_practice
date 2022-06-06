var longestCommonSubsequence = function (text1, text2) {
  if (text1.length < text2.length) {
    let temp = text1;
    text1 = text2;
    text2 = temp;
  }

  let m = text1.length;
  let n = text2.length;

  if (m.length === 0 || n.length === 0) return 0;

  let prev = new Array(m + 1).fill(0);

  for (let c = 1; c <= n; c++) {
    let current = new Array(m + 1).fill(0);
    for (let r = 1; r <= m; r++) {
      if (text2[c - 1] === text1[r - 1]) {
        current[r] = prev[r - 1] + 1;
      } else {
        current[r] = Math.max(prev[r], current[r - 1]);
      }
    }
    prev = current;
  }
  return prev[m];
};

console.log(longestCommonSubsequence("abcde", "ace"));

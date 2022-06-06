const longestCommonSubstring = (a, b) => {
  let res = 0;
  let r = a.length;
  let c = b.length;
  let end = null;

  let dp = new Array(r + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(c + 1).fill(0);
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] > res) {
        res = dp[i][j];
        end = j;
      }
    }
  }

  return res;
};

var longestPalindrome = function (s) {
  if (s === null || s.length < 1) return "";
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let l1 = expandAroundCenter(s, i, i);
    let l2 = expandAroundCenter(s, i, i + 1);

    let len = Math.max(l1, l2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

let expandAroundCenter = (s, left, right) => {
  let L = left,
    R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }

  return R - L - 1;
};

const longestCommonPalindrome2 = (s) => {
  let a = s;
  let b = s.split("").reverse().join("");
  let longestCommon = longestCommonSubstring(a, b);

  console.log(longestCommon);
};

console.log(longestPalindrome("babbac"));

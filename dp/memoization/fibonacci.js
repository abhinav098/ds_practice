// bigO => 2^n
// Space => n
// solving overlapping subproblems using DP
// memoization is one of the important concept to solve DP problems

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const trib = (n) => {
  if (n < 2) return 0;
  if (n === 2) return 1;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

const tribMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 2) return 0;
  if (n === 2) return 1;
  memo[n] =
    tribMemo(n - 1, memo) + tribMemo(n - 2, memo) + tribMemo(n - 3, memo);
  return memo[n];
};

console.log(fib(30));

var climbStairs = function (n) {
  return findSteps(n);
};

const findSteps = (target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  memo[target] = findSteps(target - 1, memo) + findSteps(target - 2, memo);
  return memo[target];
};

console.log(climbStairs(3));

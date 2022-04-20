// target = 7 numbers = [5,4,3,7];
// figure out if the numbers array can produce a sum of target
// number can be duplicated while calculating sum

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumMemo(300, [7, 14]));

/**
 * target = 7 numbers = [5,4,3,7]; figure out how the numbers array can produce a sum of target
 * number can be duplicated while calculating sum
 * m = targetSume
 * n = numbers.length
 *
 * Brute force:
 * time O(m^n)
 * space: O(m^2)
 */

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let result = howSum(remainder, numbers);
    if (result !== null) {
      result.push(num);
      return result;
    }
  }
  return null;
};

const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let remainder = targetSum - num;
    let result = howSumMemo(remainder, numbers, memo);
    if (result !== null) {
      result.push(num);
      memo[targetSum] = result;
      return result;
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSumMemo(12, [3, 9, 6, 4, 2, 7]));

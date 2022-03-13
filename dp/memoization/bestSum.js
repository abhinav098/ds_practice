// target = 7 numbers = [5,4,3,7];
// figure out how the numbers array can produce a sum of target
// number can be duplicated while calculating sum

/**
 * m = targetSume
 * n = numbers.length
 *
 * Brute force:
 * time: O(n^m * m)
 * space: O(m^2)
 *
 * Memoized:
 * time: O(n*m^2)
 * space: O(m^2)
 */

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestComb = null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let result = bestSum(remainder, numbers);
    if (result !== null) {
      result.push(num);
      if (shortestComb === null || result.length < shortestComb.length) {
        shortestComb = result;
      }
    }
  }
  return shortestComb;
};

const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestComb = null;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let result = bestSumMemo(remainder, numbers, memo);
    if (result !== null) {
      const x = [...result, num];
      if (shortestComb === null || x.length < shortestComb.length) {
        shortestComb = x;
      }
    }
  }

  memo[targetSum] = shortestComb;
  return memo[targetSum];
};

console.log(bestSumMemo(100, [15, 20, 5, 14]));

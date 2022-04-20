// input: word, wordBank[]

const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const waysToConstruct = countConstruct(
        target.slice(word.length),
        wordBank
      );
      count += waysToConstruct;
    }
  }

  return count;
};

const countConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstructMemo(
        target.slice(word.length),
        wordBank,
        memo
      );
      count += numWays;
    }
  }

  memo[target] = count;
  return count;
};

console.log(countConstructMemo("purple", ["purp", "le", "p", "ur", "purpl"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

console.log(
  countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

// input: word, wordBank[]
// figure out whether we can construct a word using the word bank or not

const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let remainingWord = target.slice(word.length);
      if (canConstruct(remainingWord, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

const canConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      let remainingWord = target.slice(word.length);
      if (canConstructMemo(remainingWord, wordBank, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return memo[target];
};

console.log(canConstruct("purple", ["purp", "le", "p", "ur", "purpl"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

console.log(
  canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

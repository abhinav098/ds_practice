// input: word, wordBank[]

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]; // to induce memoization creating an object for fast lookup
  if (target === "") return [[]];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const ways = allConstruct(suffix, wordBank, memo);
      const total = ways.map((way) => [word, ...way]);
      result.push(...total);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "le", "p", "ur", "purpl"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeez", [
    "ee",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);

const allSum = (numbers, target) => {
  let result = [];
  constructAllSum(numbers, target, result);
  return result;
};

const constructAllSum = (numbers, target, result) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let remainder = target - num;
    let r = allSum(numbers, remainder);
    if (r !== null) {
      r.map((r) => [...r, num]);
      if (result.length === 0) {
        result.push(...r);
      }
    }
  }
  return null;
};

let numbers = [3, 9, 4, 6, 2, 1];
console.log(allSum(numbers, 12));

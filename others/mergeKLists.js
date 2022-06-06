const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    lists.push(mergeLists(l1, l2));
  }

  return lists[0];
};

lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6, 9],
];

const mergeLists = (left, right) => {
  let result = [];
  let leftInd = 0;
  let rightInd = 0;

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] < right[rightInd]) {
      result.push(left[leftInd]);
      leftInd++;
    } else {
      result.push(right[rightInd]);
      rightInd++;
    }
  }

  return result.concat(left.slice(leftInd), right.slice(rightInd));
};

console.log(mergeKLists(lists));

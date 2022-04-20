const getSubsets = (set, index) => {
  let allsubsets;
  if (set.size === index) {
    // base case ---- return
    allsubsets = [];
    allsubsets.push([]);
  } else {
    allsubsets = getSubsets(set, index + 1);
    item = Array.from(set)[index];
    let moresubsets = [];
    for (let subset of allsubsets) {
      let newSubset = [];
      newSubset.push(...subset);
      newSubset.push(item);
      moresubsets.push(newSubset);
    }
    allsubsets.push(...moresubsets);
  }
  return allsubsets;
};

let set = new Set([1, 2]);

console.log(getSubsets(set, 0));

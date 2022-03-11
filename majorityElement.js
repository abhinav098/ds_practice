var majorityElement = function (nums) {
  const mapList = new Map();
  const majorityList = [];
  for (let i of nums) {
    if (mapList.has(i)) {
      mapList.set(i, mapList.get(i) + 1);
    } else {
      mapList.set(i, 1);
    }
  }

  for (let [i, j] of mapList) {
    if (j > Math.floor(nums.length / 3)) {
      majorityList.push(i);
    }
  }
  return majorityList;
};

nums = [2, 2, 3, 1, 1, 1, 3, 2, 2];
console.log(majorityElement(nums));

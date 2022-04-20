const MinHeap = require("../minHeap");

var kClosest = function (points, k) {
  // const distances = new MinHeap();
  let distances = [];

  for (let [x, y] of points) {
    let distance = calculateDistance(x, y);
    // distances.add(distance);
    distances.push([distance, x, y]);
  }

  distances.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push([distances[i][1], distances[i][2]]);
  }

  return result;
};

const calculateDistance = (x, y) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

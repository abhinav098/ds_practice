const MinHeap = require("../minHeap");
const MaxHeap = require("../maxHeap");

const kthMin = (arr, k) => {
  let min = -1;
  if (k > arr.length) return min;
  minHeap = new MinHeap();
  minHeap.init(arr);

  while (k > 0) {
    min = minHeap.extractMin();
    k--;
  }

  return min;
};

let arr = [4, 5, 6, 0, 7, 2, 1];
console.log(kthMin(arr, 2));

const findKthMax = (arr, k) => {
  let max = -1;
  if (k > arr.length) return max;
  mf = new MaxHeap();
  mf.init(arr);

  while (k > 0) {
    max = mf.extractMax();
    k -= 1;
  }
  return max;
};

console.log(findKthMax(arr, 2));

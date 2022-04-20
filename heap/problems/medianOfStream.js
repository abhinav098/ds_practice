const MinHeap = require("../minHeap");
const MaxHeap = require("../maxHeap");

var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

MedianFinder.prototype.getList = function () {
  this.minHeap.print();
  this.maxHeap.print();
};

MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.add(num);
  this.minHeap.add(this.maxHeap.extractMax());

  if (this.maxHeap.size() < this.minHeap.size()) {
    this.maxHeap.add(this.minHeap.extractMin());
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.peek();
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.peek();
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

mf = new MedianFinder();
mf.addNum(-1);
console.log(mf.findMedian());
mf.addNum(-2);
console.log(mf.findMedian());
mf.addNum(-3);
console.log(mf.findMedian());
mf.addNum(-4);
console.log(mf.findMedian());
mf.addNum(-5);
console.log(mf.findMedian());

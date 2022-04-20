class MaxHeap {
  constructor() {
    this.values = [];
  }

  parent = (index) => {
    return Math.floor((index - 1) / 2);
  };

  size = () => {
    return this.values.length;
  };

  print = () => {
    console.log(this.values);
  };

  left = (index) => {
    return 2 * index + 1;
  };

  right = (index) => {
    return 2 * index + 2;
  };

  isLeaf = (index) => {
    return (
      index >= Math.floor(this.values.length / 2) && index < this.values.length
    );
  };

  peek = () => {
    return this.values[0];
  };

  extractMax = () => {
    let deleted = this.values[0];
    this.values[0] = this.values.pop();

    // heapifyDown current root element
    this.heapifyDown(0);
    return deleted;
  };

  swap = (i, j) => {
    [this.values[j], this.values[i]] = [this.values[i], this.values[j]];
  };

  add = (element) => {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  };

  heapifyUp = (current) => {
    while (current > 0) {
      let parent = this.parent(current);
      if (this.values[current] >= this.values[parent]) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  };

  init = (elements) => {
    for (let i of elements) {
      this.add(i);
    }
  };

  heapifyDown = (current) => {
    if (this.isLeaf(current)) return;

    let left = this.left(current);
    let right = this.right(current);
    let largestIndex = current;
    if (this.values[largestIndex] < this.values[left]) {
      largestIndex = left;
    }

    if (this.values[largestIndex] < this.values[right]) {
      largestIndex = right;
    }

    if (largestIndex !== current) {
      this.swap(current, largestIndex);
      this.heapifyDown(largestIndex);
    }
  };
}

module.exports = MaxHeap;

// mf = new MaxHeap();
// mf.init([-1, -2, -3, -4, -5]);

// mf.print();
// mf.extractMax();
// mf.print();

// mf.extractMax();
// mf.print();

// mf.extractMax();
// mf.print();

// mf.extractMax();
// mf.print();

class MinHeap {
  constructor() {
    this.values = [];
  }

  init(elements) {
    for (let i of elements) {
      this.add(i);
    }
  }

  size = () => {
    return this.values.length;
  };

  peek = () => {
    return this.values[0];
  };

  print() {
    console.log(this.values);
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  isLeafNode(index) {
    return (
      index >= Math.floor(this.values.length / 2) && index < this.values.length
    );
  }

  add(num) {
    this.values.push(num);
    this.heapifyUp(this.values.length - 1);
  }

  extractMin() {
    let extracted = this.values[0];
    this.values[0] = this.values.pop();

    // heapifyDown current root element
    this.heapifyDown(0);
    return extracted;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  heapifyUp(current) {
    while (current > 0) {
      let parentIndex = this.parent(current);
      if (this.values[current] <= this.values[parentIndex]) {
        this.swap(current, parentIndex);
      } else {
        break;
      }

      current = parentIndex;
    }
  }

  heapifyDown(current) {
    if (this.isLeafNode(current)) return;
    let smallestIndex = current;
    let left = this.leftChild(current);
    let right = this.rightChild(current);

    if (this.values[smallestIndex] > this.values[right]) {
      smallestIndex = right;
    }

    if (this.values[smallestIndex] > this.values[left]) {
      smallestIndex = left;
    }

    if (smallestIndex != current) {
      this.swap(current, smallestIndex);
      this.heapifyDown(smallestIndex);
    }
  }
}

module.exports = MinHeap;

class Node {
  constructor(prev = null, next = null, val = null, key = null) {
    this.prev = prev;
    this.next = next;
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    // this will store DL node with each key
    this.map = new Map();
    this.head = new Node();
    this.tail = new Node();

    this.tail.prev = this.head;
    this.head.next = this.tail;
  }

  _insertInFront(node) {
    node.next = this.head.next;
    node.next.prev = node;

    node.prev = this.head;
    this.head.next = node;

    this.currentSize += 1;
  }

  _moveToFront(node) {
    this._removeNode(node);
    this._insertInFront(node);
  }

  _removeNode(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    this.currentSize -= 1;
  }

  get(key) {
    let node = this.map.get(key);
    if (!node) return -1;
    this._moveToFront(node);
    return node.val;
  }

  put(key, val) {
    // If key already present in the cache, delete it
    let node = this.map.get(key);
    if (!node) {
      let newNode = new Node();
      newNode.key = key;
      newNode.val = val;

      this.map.set(key, newNode);
      this._insertInFront(newNode);

      // check the capacity if capacity is max delete the tail
      if (this.currentSize > this.capacity) {
        let tail = this.tail.prev;
        let tailKey = tail.key;
        this._removeNode(tail);
        this.map.delete(tailKey);
      }
    } else {
      node.val = val;
      this._moveToFront(node);
    }
  }
}

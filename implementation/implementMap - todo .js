var MyHashMap = function () {
  this.keySpace = 2069;
  this.hashTable = [];
  for (let i = 0; i < this.keySpace; i++) {
    // creating buckets at each index
    // so that it can handle collision
    this.hashTable.push([]);
  }

  this.hashKey = function (key) {
    return key % this.keySpace;
  };
  return this;
};

MyHashMap.prototype.put = function (key, value) {};

MyHashMap.prototype.get = function (key) {
  const hashkey = this.hashKey(key);
  for (let bucket of this.hashTable[hashkey]) {
    if (bucket[key] == key) {
      return bucket[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {};

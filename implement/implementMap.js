var MyHashMap = function () {
  this.keySpace = 2069;
  this.hashTable = [];
  for (let i = 0; i < this.keySpace; i++) {
    this.hashTable.push([]);
  }

  this.hashKey = function (key) {
    return key % this.keySpace;
  };
  return this;
};

MyHashMap.prototype.put = function (key, value) {};

MyHashMap.prototype.get = function (key) {};

MyHashMap.prototype.remove = function (key) {};

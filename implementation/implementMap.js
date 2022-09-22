class MyHashMap {
  constructor() {
    this.table = new Array(2096);
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  set(key, value) {
    let index = hash(key); // returns a specific index
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      let [k, v] = bucket[i];
      if (k === key) {
        bucket[i][1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    let index = hash(key);
    for (let bucket of this.table[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
    return -1;
  }

  hash(key) {
    return key % 2096;
  }
}

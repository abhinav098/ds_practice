class MySet {
  constructor() {
    this.table = new Array(2096);
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  hash(key) {
    return key % 2096;
  }

  add(value) {
    let index = this.hash(value);
    let bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      const [k] = bucket[i];
      if (k === value) {
        bucket[i][0] = value;
        return;
      }
    }
    this.table[index].push([value, value]);
  }

  delete(value) {
    let index = this.hash(value);
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      let [k, v] = bucket[i];

      if (k === value) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  has(value) {
    let index = this.hash(value);
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      let [k, v] = bucket[i];
      if (k === value) {
        return true;
      }
    }

    return false;
  }
}

const set = new MySet();
set.add(1);
set.add(2);
set.delete(2);
console.log(set.has(2));

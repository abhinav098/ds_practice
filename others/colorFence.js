function colorFence(count) {
  return {
    size: count,
    fences: new Set(),
    countRemaining(left, right) {
      for (let i = left; i <= right; i++) {
        if (i < count) {
          this.fences.add(i);
        }
      }
      return this.size - this.fences.size;
    },
  };
}

let fences = new colorFence(20);

console.log(fences.countRemaining(18, 18));
console.log(fences.countRemaining(0, 3));
console.log(fences.countRemaining(17, 19));

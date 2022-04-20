const fibonacci = (n) => {
  let table = new Array(n + 1).fill(0);
  let a = 0;
  let b = 1;
  // table[0] = 0;
  // table[1] = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    // table[i] = table[i - 1] + table[i - 2];
  }
  // console.log(table);
  // return table[n - 1] + table[n - 2];
  return a + b;
};

console.log(fibonacci(50));

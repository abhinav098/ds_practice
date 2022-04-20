const minChange = (amount, coins) => {
  if (amount === 0) return 0;
  if (amount < 0) return null;
  let shortestChange = null;

  for (let m of coins) {
    const remainder = amount - m;
    const result = minChange(remainder, coins);
    if (result !== null) {
      let res = result + 1;
      if (shortestChange === null || res < shortestChange) {
        shortestChange = res;
      }
    }
  }

  return shortestChange;
};

console.log(minChange(8, [1, 5, 4, 2])); // 2

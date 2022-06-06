const minChange = (amount, coins) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  let minCoins = Infinity;

  for (let m of coins) {
    const remainder = amount - m;
    let numCoins = 1 + minChange(remainder, coins);
    minCoins = Math.min(numCoins, minCoins);

    // if (result !== null) {
    //   let res = result + 1;
    //   if (shortestChange === null || res < shortestChange) {
    //     shortestChange = res;
    //   }
    // }
  }

  return minCoins;
};

console.log(minChange(8, [1, 5, 4, 2])); // 2

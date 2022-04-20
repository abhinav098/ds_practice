let numWaysSteps = (n) => {
  // tabulation with constant space
  let a = 1;
  let b = 1;
  let c = 2;
  for (i = 3; i < n; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return a + b + c;
};

// tabulation
// let table = new Array(n + 1).fill(0);
// table[0] = 1;
// table[1] = 1;
// table[2] = 2;
// for (i = 3; i < n; i++) {
//   table[i] = table[i - 1] + table[i - 2] + table[i - 3];
// }

// recursive with memo
// memo -- from function
// if (n < 0) return 0;
// if (n === 0) return 1;
// if(let n in memo) return memo[n];
// memo[n] = numWaysSteps(n - 1, memo) + numWaysSteps(n - 2, memo) + numWaysSteps(n - 3, memo);
// return memo[n];

console.log(numWaysSteps(50));

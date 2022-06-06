// can only move right or down.
// figure out in how many ways a person can travel from start to end;

// bigO => 2^n+m (because the run time of this function will depend on total number of nodes)
// spaceComplexity => n + m
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// bigO => n * m (because the run time of this function will depend on total number of nodes)
const gridTravelerMemo = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 1;

  memo[key] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerMemo(2, 2));

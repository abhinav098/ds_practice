// https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination

var shortestPath = function (grid, k) {
  if (grid.length === 0) return -1;
  const m = grid.length,
    n = grid[0].length;
  const visited = new Set();

  // start from top left position
  const src = [0, 0, 0, k];
  const queue = [src];
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  visited.add(`${src[0]},${src[1]},${k}`);

  while (queue.length > 0) {
    let [r, c, distance, obs] = queue.shift();

    if (r === m - 1 && c === n - 1) {
      return distance;
    }

    for (let [x, y] of directions) {
      const validIndex = r + x < m && r + x >= 0 && c + y < n && c + y >= 0;
      if (validIndex) {
        let remObs = obs - grid[r + x][c + y];
        let pos = `${r + x},${c + y},${remObs}`;
        if (remObs >= 0 && !visited.has(pos)) {
          visited.add(pos);
          queue.push([r + x, c + y, distance + 1, remObs]);
        }
      }
    }
  }
  return -1;
};

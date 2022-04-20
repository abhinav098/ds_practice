// https:leetcode.com/problems/shortest-path-to-get-food/

// start value is given as "*" we have to find it's position and
// then perform bfs to reach to the target i.e. "#".

// some problems might have a condition where we have to start from
// top left and go till the bottom-right

// both problems will have similar solution it's just the difference
// of start in the first one, we'll have to find the starting position
// in the latter one it would be 0,0.

var shortestPathGrid = function (grid) {
  if (grid.length === 0) return -1;
  const visited = new Set();

  // find starting position
  const src = findStart(grid);

  // start bfs from start
  const queue = [src];
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let pos = src[0] + "," + src[1];
  visited.add(pos);

  while (queue.length > 0) {
    let [r, c, distance] = queue.shift();
    if (grid[r][c] === "#") return distance;

    for (let [x, y] of directions) {
      if (isValidPosition(r, x, c, y, grid)) {
        pos = r + x + "," + (c + y);

        if (!visited.has(pos) && grid[r + x][c + y] !== "X") {
          visited.add(pos);
          queue.push([r + x, c + y, distance + 1]);
        }
      }
    }
  }
  return -1;
};

const isValidPosition = (r, x, c, y, grid) => {
  const m = grid.length,
    n = grid[0].length;
  return r + x < m && r + x >= 0 && c + y < n && c + y >= 0;
};

const findStart = (grid) => {
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (grid[r][c] === "*") {
        return [r, c, 0];
      }
    }
  }
};

const grid = [
  ["X", "X", "X", "X", "X", "X"],
  ["X", "*", "O", "O", "O", "X"],
  ["X", "O", "O", "#", "O", "X"],
  ["X", "X", "X", "X", "X", "X"],
];

// reach from * to #
console.log(shortestPathGrid(grid));

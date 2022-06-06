const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Number.MAX_VALUE;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0) min = Math.min(min, size);
    }
  }
  return min;
};

const explore = (grid, r, c, visited) => {
  const rowBounds = 0 <= r && r < grid.length;
  const colBounds = 0 <= c && c < grid[0].length;

  // return 0 if invalid row/column indexes
  if (!rowBounds || !colBounds) return 0;

  // check for water, in case water return 0
  if (grid[r][c] == "W") return 0;

  // check if already visited and return 0 in case visited
  pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r, c + 1, visited);
  size += explore(grid, r, c - 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W"],
  ["W", "L", "W"],
  ["W", "W", "W"],
  ["W", "W", "W"],
  ["L", "W", "W"],
  ["L", "L", "W"],
];

minimumIsland(grid);

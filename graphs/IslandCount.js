const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) count += 1;
    }
  }
  console.log(count);
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowBounds = 0 <= r && r < grid.length;
  const colBounds = 0 <= c && c < grid[0].length;

  if (!rowBounds || !colBounds) return false;

  if (grid[r][c] == "W") return false;

  // check if already visited and return false in case visited
  pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W"],
  ["W", "L", "W"],
  ["W", "W", "W"],
  ["W", "W", "W"],
  ["L", "W", "W"],
  ["L", "L", "W"],
];
islandCount(grid);

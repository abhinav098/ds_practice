// Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.

let roboGridPath = (grid, r, c) => {
  if (r === grid.length - 1 && c === grid[0].length - 1) return true;
  if (c === grid[0].length || r === grid.length || grid[r][c] === "X")
    return false;

  if (roboGridPath(grid, r, c + 1)) {
    return true;
  }

  if (roboGridPath(grid, r + 1, c)) {
    return true;
  }

  return false;

  // let queue = [[0, 0]];
  // while (queue.length != 0) {
  //   let [r, c] = queue.shift();
  //   if (r === grid.length - 1 && c === grid[0].length - 1) return true;

  //   if (c < grid[0].length && r < grid.length && grid[r][c] != "X") {
  //     queue.push([r + 1, c]);
  //     queue.push([r, c + 1]);
  //   }
  // }
  // return false;
};

let grid = ["0000", "00X0", "000X", "00X0"];

console.log(roboGridPath(grid, 0, 0));

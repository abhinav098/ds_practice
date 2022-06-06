/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  let visited = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
        maxArea = Math.max(maxArea, explore(i, j, grid, visited));
      }
    }
  }
  return maxArea;
};

const explore = (row, col, grid, visited) => {
  let queue = [[row, col]];
  visited.add(`${row},${col}`);

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let size = 0;
  while (queue.length > 0) {
    let [row, col] = queue.shift();

    if (grid[row][col] === 1) {
      size += 1;
    }

    for (let [x, y] of directions) {
      let newRow = row + x;
      let newCol = col + y;
      if (isValidPosition(newRow, newCol, grid)) {
        let pos = `${newRow},${newCol}`;

        if (!visited.has(pos) && grid[newRow][newCol] === 1) {
          visited.add(pos);
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  return size;
};

const isValidPosition = (row, col, grid) => {
  let m = grid.length;
  let n = grid[0].length;

  return row < m && 0 <= row && col < n && col >= 0;
};

grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));

// var maxAreaOfIsland = function (grid) {
//   let maxArea = Number.NEGATIVE_INFINITY;
//   let visited = new Set();

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       maxArea = Math.max(explore(grid, i, j, visited), maxArea);
//     }
//   }

//   return maxArea;
// };

// const explore = (grid, row, col, visited) => {
//   let rowBounds = row < grid.length && row >= 0;
//   let colBounds = col < grid[0].length && col >= 0;

//   // check the grid bounds
//   if (!rowBounds || !colBounds) return 0;

//   // dont care for zeros
//   if (grid[row][col] === 0) return 0;

//   // check the set
//   let pos = row + "," + col;
//   if (visited.has(pos)) return 0;
//   visited.add(pos);

//   // explore the area
//   let area = 1;
//   area += explore(grid, row + 1, col, visited);
//   area += explore(grid, row - 1, col, visited);
//   area += explore(grid, row, col + 1, visited);
//   area += explore(grid, row, col - 1, visited);

//   return area;
// };

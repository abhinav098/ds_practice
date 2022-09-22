// // locker system

// // 1. locker has lockers with each sizes
// small - 5
// med - 10
// large - 15

// list of packages = []
// list of packages with size between [0 - 15]

// // packages = [ [cust_id, size] .....]
// // 3 lockers = [small, med, large] package size = 7

// lockerMap = {
//     small = [],
//     medium = [],
//     large = []
// }

// ==========
"use_strict";

class Locker {
  constructor(cutomer_id, pkg) {
    this.customer_id = cutomer_id;
    this.pkg = pkg;
  }
}

class LockerAssignment {
  constructor() {
    this.small = 10;
    this.medium = 10;
    this.large = 10;

    this.lockerMap = {
      small: { spots: new Array(this.small), nextAvailable: 0 },
      medium: { spots: new Array(this.medium), nextAvailable: 0 },
      large: { spots: new Array(this.large), nextAvailable: 0 },
    };

    this.unassigned = [];
  }

  getType(size) {
    let type = "";
    if (size <= 5) {
      type = "small";
    } else if (size > 5 && size <= 10) {
      type = "medium";
    } else if (size > 10 && size <= 15) {
      type = "large";
    }
    return type;
  }

  assignPackage(packages) {
    for (let pkg of packages) {
      let [cust_id, size] = pkg;

      let type = this.getType(size);
      if (type === "") this.unassigned.push(pkg);

      let isLockerAssigned = this.assignLocker(type, cust_id, size);

      if (!isLockerAssigned) {
        let assigned = this.lookForOtherTypesLockers(type, cust_id, size);
        if (!assigned) {
          this.unassigned.push(pkg);
        }
      }
    }
    return this.lockerMap;
  }

  assignLocker(type, cust_id, pkg) {
    if (!this.lockerMap[type]) return false;

    let isLockerAssigned = false;
    let next = this.lockerMap[type]["nextAvailable"];
    if (next < this.lockerMap[type]["spots"].length) {
      this.lockerMap[type]["spots"][next] = new Locker(cust_id, pkg);
      this.lockerMap[type]["nextAvailable"]++;
      isLockerAssigned = true;
    }

    return isLockerAssigned;
  }

  lookForOtherTypesLockers(type, cust_id, size) {
    let types = ["small", "medium", "large"];
    let currentTypeIndex = types.indexOf(type);

    let assigned = false;
    while (currentTypeIndex < types.length && !assigned) {
      let nextTypeIndex = currentTypeIndex + 1;
      if (nextTypeIndex < 3) {
        let nextType = types[nextTypeIndex];
        assigned = this.assignLocker(nextType, cust_id, size);
        if (assigned) break;
      }
      currentTypeIndex = nextTypeIndex;
    }
    return assigned;
  }
}

let lockerSystem = new LockerAssignment();

console.log(
  lockerSystem.assignPackage([
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [10, 5],
    [11, 5],
    [12, 5],
    [13, 5],
    [12, 5],
    [13, 5],
    [14, 5],
    [15, 5],
    [11, 5],
    [12, 5],
    [13, 5],
    [14, 5],
    [15, 50],
  ])
);

/**Given a 2D grid, handle multiple queries of the following type:
/**

* Calculate the sum of the elements of grid inside the rectangle
* defined by its upper left corner (row1, col1) and
* lower right corner (row2, col2).

* Implement the NumGrid class:

* NumGrid(int[][] grid) Initializes the object with the integer grid.
* int sumRegion(int row1, int col1, int row2, int col2)
* Returns the sum of the elements of grid inside the rectangle defined by
* its upper left corner (row1, col1) and lower right corner (row2, col2).
*
**/
//     0 1 2 3 4 5 6
// 0   1 2 0 4 1 1 1
// 1   0 2 0 4 1 1 1
// 2   0 2 0 4 1 1 1
// 3   1 2 0 4 1 1 1      *(row, col)
// 4   1 2 0 4 1 1 1

// dp[r][c] = grid[r - 1][c]  + grid[r][c]

// dp[1][2] =

// O(m*n)
// O(m*n)

// O(1)

// [0, 0]  [0, 0] = 1

// 0  1  3  3  7  8  9 10
// 1  3  5
// 2
// 3
// 4

// [1][1] = 5

// [3][3]

class NumGrid {
  constructor(grid) {
    this.grid = grid;
  }

  sumRegion(row1, col1, row2, col2) {
    if (this.grid.length === 0 || this.grid[0].length === 0) return -1;

    if (
      !(row1 <= this.grid.length && row1 > 0) ||
      !(row2 <= this.grid.length && row2 > 0) ||
      !(col1 <= this.grid[0].length && col1 > 0) ||
      !(col2 <= this.grid[0].length && col2 > 0)
    )
      return -1;

    let sum = 0;

    for (let r = row1; r <= row2; r++) {
      for (let c = col1; c <= col2; c++) {
        sum += this.grid[r][c];
      }
    }

    // return the sum of the elements present in the given range
    return sum;
  }
}

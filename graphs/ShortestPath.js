// need to go using BFS for this
// because DFS goes in only one direction

const findShortestPath = (graph, src, dest) => {
  const visited = new Set();
  const queue = [[src, 0]]; // storing the source with distance

  while (queue.length > 0) {
    const current = queue.shift();
  }
};

const explore = (graph, src, dest, visited) => {};

const graph = {
  x: ["y", "w"],
  y: ["z", "x"],
  w: ["x", "v"],
  v: ["w", "z"],
  z: ["v", "y"],
};

findShortestPath(graph, "w", "z");

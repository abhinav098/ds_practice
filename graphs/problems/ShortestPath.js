// need to go using BFS for this
// because DFS goes in only one direction

const findShortestPath = (graph, src, dest) => {
  const visited = new Set();
  // storing the source with distance
  const queue = [[src, 0]];
  visited.add(src);

  while (queue.length > 0) {
    let [current, distance] = queue.shift();
    if (current === dest) return distance;

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const graph = {
  x: ["y", "w"],
  y: ["z", "x"],
  w: ["x", "v"],
  v: ["w", "z"],
  z: ["v", "y"],
};

findShortestPath(graph, "w", "z");

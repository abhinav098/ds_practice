const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count += 1;
    }
  }

  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  for (let neighbor of graph[node]) {
    if (!visited.has(String(neighbor))) {
      explore(graph, neighbor, visited);
    }
  }

  return true;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log(connectedComponentsCount(graph));

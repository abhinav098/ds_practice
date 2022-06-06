const topologicalSort = (v, graph) => {
  let visited = new Set();
  let stack = [];
  for (let i = 0; i < v; i++) {
    if (!visited.has(i)) {
      dfs(graph, i, stack, visited);
    }
  }

  return stack;
};

const dfs = (graph, i, stack, visited) => {
  visited.add(i);

  if (!graph[i]) {
    stack.push(i);
    return;
  }

  for (let neighbor of graph[i]) {
    if (!visited.has(i)) {
      dfs(graph, neighbor, stack, visited);
    }
  }

  stack.push(i);
};

const buildGraph = (edges) => {
  for (let [dest, src] of edges) {
    if (!graph[src]) graph[src] = [];
    graph[src].push(dest);
  }
};

let graph = {
  0: [1, 2],
  1: [3],
  2: [3],
};
console.log(topologicalSort(4, graph));

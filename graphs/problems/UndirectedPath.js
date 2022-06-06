const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return console.log(hasPath(graph, nodeA, nodeB, new Set()));
};

const buildGraph = (edges) => {
  const graph = {};
  for (let [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, src, dest, visited) => {
  if (visited.has(src)) return false;
  visited.add(src);

  if (src === dest) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

undirectedPath(edges, "m", "n");

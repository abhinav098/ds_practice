const graphDFS = (graph, src) => {
  const nodeStack = [src];

  while (nodeStack.length > 0) {
    const current = nodeStack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      nodeStack.push(neighbor);
    }
  }
};

const graphRecursiveDFS = (graph, src) => {
  console.log(src);

  for (let neighbor of graph[src]) {
    graphRecursiveDFS(graph, neighbor);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

let start = "a";
graphDFS(graph, start);

start = "b";
console.log("===== recursive ===== starting point " + start);
graphRecursiveDFS(graph, start);

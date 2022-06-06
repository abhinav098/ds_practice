const hasPath = (src, destination, graph) => {
  // return hasPathRec(src, destination, graph);

  // return hasPathIterative(src, destination, graph);
  return hasPathDfs(src, destination, graph);
};

// dfs recursive
const hasPathRec = (src, destination, graph) => {
  if (src === destination) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(neighbor, destination, graph)) {
      return true;
    }
  }

  return false;
};

// bfs
const hasPathIterative = (src, dest, graph) => {
  let queue = [src];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// dfs
const hasPathDfs = (src, dest, graph) => {
  let stack = [src];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

let graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath("f", "k", graph));

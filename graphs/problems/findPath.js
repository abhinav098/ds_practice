const findPath = (src, destination, graph) => {
  // return findPathRec(src, destination, graph);

  // return findPathIterative(src, destination, graph);
  return findPathDfs(src, destination, graph);
};

// dfs recursive
const findPathRec = (src, destination, graph) => {
  if (src === destination) return true;

  for (let neighbor of graph[src]) {
    if (findPath(neighbor, destination, graph)) {
      return true;
    }
  }

  return false;
};

// bfs
const findPathIterative = (src, dest, graph) => {
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
const findPathDfs = (src, dest, graph) => {
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

console.log(findPath("f", "k", graph));

const graphBFS = (graph, src) => {
  const queue = [src];
  let visited = new Set();
  visited.add(src);

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    if (graph[current]) {
      for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
};

const graph = {
  0: ["1", "2", "3", "4"],
  1: ["5", "6", "4"],
  2: ["9", "7", "4"],
  3: ["6", "4"],
  // e: [],
  // f: [],
};

let start = "0";
graphBFS(graph, start);

const convertToAdjList = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const bfs = (graph, source, dest) => {
  const visited = new Set();
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.node === dest) return current.dist;

    if (visited.has(current.node)) {
      continue;
    }

    visited.add(current.node);
    console.log(visited);

    for (const neighor of graph[current.node]) {
      queue.push({ node: neighor, dist: current.dist + 1 });
    }
  }
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const graph = convertToAdjList(edges);
// console.log(graph, {node: 'w',dist:0});

const dist = bfs(graph, { node: "w", dist: 0 }, "z");
console.log(dist);

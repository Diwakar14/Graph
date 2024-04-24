const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const explore = (graph, row, col, visited) => {
  const rowInbounds = 0 <= row && row < graph.length;
  const colInbounds = 0 <= col && col < graph.length;

  if (!rowInbounds || !colInbounds) return false;

  if (graph[row][col] === "W") return false;

  const pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  console.log("Exploring : " + row + " " + col);
  explore(graph, row, col + 1, visited);
  explore(graph, row, col - 1, visited);
  explore(graph, row + 1, col, visited);
  explore(graph, row - 1, col, visited);
  return true;
};

const visited = new Set();
let count = 1;
for (let i = 0; i < grid.length; i++) {
  const row = i;

  for (let j = 0; j < grid[0].length; j++) {
    const col = j;

    if (explore(grid, row, col, visited)) {
      count++;
    }
  }
}
console.log(count);

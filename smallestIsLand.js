const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const exploreIsLand = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid.length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[row][col] === "W") return 0;

  const pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let count = 1;
  count += exploreIsLand(grid, row, col + 1, visited);
  count += exploreIsLand(grid, row, col - 1, visited);
  count += exploreIsLand(grid, row + 1, col, visited);
  count += exploreIsLand(grid, row - 1, col, visited);

  return count;
};

const visited = new Set();
let smallestIsLand = Infinity;
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[0].length; col++) {
    let size = exploreIsLand(grid, row, col, visited);
    if (size > 0) smallestIsLand = Math.min(smallestIsLand, size);
  }
}

console.log(smallestIsLand);

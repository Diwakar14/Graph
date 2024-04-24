
const dfs = (graph, visited) => {
    let count = 0;
    for (const node in graph) {
        if(explore(graph,node, visited)) count++;
    }
    return count;
}

const explore = (graph, source, visited) => {
    
    if(visited.has(String(source))) return false;
    visited.add(String(source));

    for (const neighbor of graph[source]) {
        explore(graph, neighbor, visited);
    }
    return true;
}

const maxGraph = (graph, visited) => {

    let max = 0;
    for (const node in graph) {
        max = Math.max(max, countNeighbors(graph, node, visited));
    }
    return max;
}

const countNeighbors = (graph, current , visited) => {
    
    if(visited.has(String(current))) return 0;
    visited.add(String(current));
    
    let count = 1;
    for (const neighbor of graph[current]) {
        count+=countNeighbors(graph, neighbor, visited);    
    }
    return count;
}

const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}

// const result = dfs(graph, new Set());
// console.log(result)
const result = maxGraph(graph, new Set());
console.log(result)
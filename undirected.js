const convertToAdjList = (edges) => {
    let adjList = {};
    for (const edge of edges) {

        const [a,b] = edge;

        if(!adjList[a]) adjList[a] = [];
        if(!adjList[b]) adjList[b] = [];
        
        adjList[a].push(b);
        adjList[b].push(a);
    }

    return adjList;
}

const dfs  = (graph, source) => {
  const stack = [source];

  
  const visited = new Set();

  while(stack.length>0){
    const current = stack.pop();
    
    if(visited.has(current)) 
      continue;

    visited.add(current);
    
    console.log(current);
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

const bfs  = (graph, source) => {
  const queue = [source];

  const visited = new Set();

  while(queue.length>0){
    const current = queue.shift();

    if(visited.has(current)) continue;
    visited.add(current);

    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}


const hasPath = (graph, source, dest, visited) => {
  if(source == dest) return true;

  if(visited.has(source)) return;
  visited.add(source);
  
  for (const neighbor of graph[source]) {
    if(hasPath(graph, neighbor,dest, visited)){
        return true;
    }
  }

  return false;
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const list = convertToAdjList(edges);
console.log(list)
// console.log('----DFS')
// dfs(list, 'i');

// console.log('----BFS')
// bfs(list, 'i');

const result = hasPath(list, 'j','o', new Set());
console.log(result)
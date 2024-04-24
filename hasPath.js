const hasPath = (graph, source, dest) => {
    const queue = [source];

    while(queue.length>0){
        const current = queue.shift();

        if(current == dest) return true;
        for (const neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

    return false;
    
    // if(source == dest) return true;

    // for (const neighbor of graph[source]) {
    //     if(hasPath(graph,neighbor, dest)){
    //         return true;
    //     }
    // }

    // return false;
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph, 'f', 'k'));
console.log(hasPath(graph, 'f', 'j'));
const dfs = (graph,source) => {
    const stack = [source];

    while(stack.length>0){
        const current = stack.pop();
        console.log(current);

        for (const neighors of graph[current]) {
            stack.push(neighors)
        }
    }
}

const bfs = (graph, source) => {
    const queue = [source];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for (const neighors of graph[current]) {
            queue.push(neighors)
        }
    }
}


const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

dfs(graph, 'a');
console.log('---')
bfs(graph, 'a');
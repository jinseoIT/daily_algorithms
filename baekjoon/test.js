const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
// 인접 리스트
const graph = []

for(let i =1; i<=n;i++) graph[i] = [];
for(let i =1; i<n;i++){
    const [a,b,cost] = input[i].split(" ").map(Number);
    graph[a].push([b, cost])
    graph[b].push([a, cost])
}

let visited;
let distance;

function dfs(x, dist){
    if(visited[x]) return;
    visited[x] = true // 각 노드는 한번만 방문;
    distance[x] = dist;
    for(let [y, cost] of graph[x]) dfs(y, dist+cost)
}

for(let i=0; i<m; i++){
    let [x,y] = input[n+i].split(' ').map(Number);
    visited = new Array(n+i).fill(false);
    distance = new Array(n+i).fill(-1);
    dfs(x, 0);    
    console.log(distance[y]);
}


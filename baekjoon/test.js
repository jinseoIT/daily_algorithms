const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// n 정점 m 간선
const [n, m] = input[0].split(' ').map(Number);

const visited = Array(n+1).fill(false);
const graph = Array.from({length:n+1}, () => [])

for(let i = 1; i<=m; i++){
  const [a, b] = input[i].split(' ');
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (node) => {
  if(visited[node]) return;
  visited[node] = true;
  for(target of graph[node]){
    dfs(target);
  }
}

let cnt = 0;
for(let i = 1; i<=n; i++){
  if(visited[i]) continue;
  dfs(i);
  cnt ++;
}

console.log(cnt);

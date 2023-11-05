const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// N : 정점의 개수
const N = Number(input[0]);
const graph = [];
for(let i = 1; i<=N; i++){
  const target = [];
  input[i].split(" ").forEach((v,idx) => {
    if(v === "1") target.push(idx);
  })
  target.length > 0 ? graph.push(target) : graph.push([-1])
}

const dfs = (i,j, visited) => {
  for(const x of graph[i]){
    if(x < 0) return false;
    if(!visited[x]) {
      visited[x] = true;
      if(x == j) return true;
      if(dfs(x,j, visited)) return true;
    }
  }
  return false;
}

const answer = [];
for(let i =0; i<N;i++){
  const row = [];
  for(let j=0; j<N; j++){
    const visited = Array(N).fill(false);
    const res = dfs(i,j,visited) ? 1 : 0;
    row.push(res);
  }
  answer.push(row);
}
console.log(answer.map(v=> v.join(' ')).join('\n'));
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]); // row의 개수
let graph = [];

for(let i = 1; i<= n; i++){
    graph.push(input[i].split(''));
}
// 상 하 좌 우
const position = [[0, -1], [0, 1], [-1, 0], [1, 0]];
let visited = Array.from({length: n}, () => Array(n).fill(false))

const isRangeOver = (x,y) => {
    if(x < 0 || x >= n || y < 0 || y >= n) return false;
    return true;
}

const dfs = ([x,y], color) => {
    if(!isRangeOver(x,y) || visited[x][y] || graph[x][y] !== color) return
    visited[x][y] = true;
    for(const [px, py] of position) {
        dfs([x+px, y+py], color);
    }
}

// 색약이 아닐때
let normalCnt = 0;
for(let i = 0; i<n;i++){
    for(let j = 0; j<n; j++){
      if(visited[i][j]) continue;
      dfs([i,j], graph[i][j]);
      normalCnt++;
   }
}

// 색약일때
visited = Array.from({length: n}, () => Array(n).fill(false))
graph = graph.map(v=> v.map(l => l == 'R' || l == 'G' ? 'RG' : l));
let RGWeaknessCnt = 0;
for(let i = 0; i<n;i++){
    for(let j = 0; j<n; j++){
      if(visited[i][j]) continue;
      dfs([i,j], graph[i][j]);
      RGWeaknessCnt++;
   }
}

console.log(`${normalCnt} ${RGWeaknessCnt}`);
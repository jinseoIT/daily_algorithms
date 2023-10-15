const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let currentLine = 0;

// 우 하 좌 상 대각선*4
const position = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]];

const isOverRange = ([x,y],[h,w]) => {
  if(x < 0 || y < 0 || x > h || y > w) return true;
  return false
}

while(true){
  // w : 지도 넓이 , h : 지도 높이
  const [mapW, mapH] = input[currentLine].split(' ').map(Number);
  const [w, h] = [mapW - 1 , mapH -1];
  currentLine++;

  const map = [];
  for(let i = 0; i<mapH; i++) {
    const row = input[currentLine].split(' ').map(Number);
    map.push(row);
    currentLine++;
  }

  const visited = Array.from({length: mapH}, () => Array(mapW).fill(false));
  const dfs = (x,y) => {
    if(visited[x][y]) return; 
    visited[x][y] = true;
    if(!map[x][y]) return;
    for([cx, cy] of position){
      const [nx, ny] = [x+cx, y+cy];
      if(!isOverRange([nx,ny],[h,w])){
        dfs(nx,ny)
      }
    }
  }

  let cnt = 0;
  for(let i=0; i<mapH; i++){
    for(let j=0; j<mapW; j++){
      if(visited[i][j] || !map[i][j]) continue;
      dfs(i, j);
      cnt ++;
    }
  }
  
  if(mapW == 0 && mapH == 0) break;
  console.log(cnt);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
    }
    dequeue() {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
    peek(){
      return this.items[this.headIndex];
    }
    getLength(){
      return this.tailIndex - this.headIndex;
    }
}
let n = Number(input[0]); // row의 개수
// 우 하 좌 상
const position = [[1, 0], [0, 1], [-1, 0], [0, -1]] 

let graph = [];
for(let i = 1; i <=n; i++){
  graph.push(input[i].split(""));
}
const isRangeOver = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= n) return false;
  return true;
};
// 방문 확인
let visited = Array.from({length: n}, () => Array(n).fill(false));

const bfs = (x, y) =>{
  const queue = new Queue();
  queue.enqueue([x,y]);
  while(queue.getLength()) {
    const [cx,cy] = queue.dequeue();
    for([a,b] of position){
      const [nx, ny] = [cx+a, cy+b];
      if(isRangeOver(nx,ny) && !visited[nx][ny] && graph[cx][cy] == graph[nx][ny]) {
        visited[nx][ny] = true;
        queue.enqueue([nx,ny]);
      }
    }
  }
}

// 적록색약 아닌 경우
let normalCnt = 0;
for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(!visited[i][j]){
      bfs(i,j);
      normalCnt++;
    }
  }
}

// 적록색약인 경우
graph = graph.map((v) => v.map((l) => (l == "R" || l == "G" ? "RG" : l)));
visited = Array.from({ length: n }, () => Array(n).fill(false));
let RGWeaknessCnt = 0;
for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(!visited[i][j]){
      bfs(i,j);
      RGWeaknessCnt++;
    }
  }
}

console.log(`${normalCnt} ${RGWeaknessCnt}`);
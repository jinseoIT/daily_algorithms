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
  dequeue(){
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek(){
		return this.items[this.headIndex]
	}
	getLength(){
		return this.tailIndex - this.headIndex;
	} 
}
// N: 유저의 수 , M: 친구 관계의 수
const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({length: N+1}, () => []);
for(let i = 1; i<=M; i++){
  const[A, B] = input[i].split(" ").map(Number);
  graph[A].push(B)
  graph[B].push(A)
}

const bfs = (node) => {
  const queue = new Queue();
  const visited = Array(N+1).fill(0);
  queue.enqueue([node,0]);
  while(queue.getLength()){
    const [current, distance] = queue.dequeue();
    for(const B of graph[current]){
      if(!visited[B] && B !== node){
        visited[B] = distance+1;
        queue.enqueue([B, distance+1]);
      } 
    }
  }
  return visited.reduce((acc, curr) => acc+curr);
}
const score = {};
for(let i = 1; i<=N; i++){
  score[i] = bfs(i);
}
const answer = Object.entries(score).sort((a,b) => {
  if(a[1] < b[1]) return -1;
  if(a[1] > b[1]) return 1;
  if(a[0] < b[0]) return -1;
  if(a[0] > b[0]) return 1;
  return 0
})[0][0]

console.log(answer);
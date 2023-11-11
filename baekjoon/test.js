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

const bfs = (start) => {
  const queue = new Queue();
  const visited = Array(N+1).fill(0);
  queue.enqueue([start,0]);
  while(queue.getLength()){
    const [current, distance] = queue.dequeue();
    for(const B of graph[current]){
      if(!visited[B]){
        visited[B] = distance+1;
        queue.enqueue([B, distance+1]);
      } 
    }
  }
  return visited.reduce((acc, curr) => acc+curr);
}
let minScore = Number.MAX_VALUE;
let answer = -1;
for(let i = 1; i <= N; i++){
  const score = bfs(i);
  if (score < minScore) {
    minScore = score;
    answer = i;
  }
}

console.log(answer);
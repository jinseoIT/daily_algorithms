const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Queue{
	constructor(){
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0;
	}
	enqueue(item){ //넣기 
		this.items[this.tailIndex] = item;
		this.tailIndex++;
	}
	dequeue(){ // 빼기
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
const [n, m, k, x] = input[0].split(' ').map(Number);

// 도시 정보
const graph = Array.from({length:n+1}, () => []);
const visited = new Array(n+1).fill(-1);
for(let i =1; i<=m; i++){
	const [x,y] = input[i].split(' ').map(Number);
	graph[x].push(y);
	// graph[y].push(x);
}
console.log("graph ::",graph);
const queue = new Queue
visited[x] = 0;
queue.enqueue(x)
while(queue.getLength() > 0){
	const now = queue.dequeue()
	for(let nextNode of graph[now]){
		if(visited[nextNode] == -1){
			visited[nextNode] = visited[now]+1;
			queue.enqueue(nextNode)
		}
	}
}
let check = false;
for(let i = 1; i<=n; i++){
	if(visited[i] == k){
		console.log(i);
		check = true;
	}
}
if(!check) console.log(-1);

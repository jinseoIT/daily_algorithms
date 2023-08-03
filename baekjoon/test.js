const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

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
		this.headIndex++;
		return item;
	}
	getLength(){
		return this.tailIndex - this.headIndex;
	}
}
// n: 역의 갯수, 하이퍼튜브당 연결 갯수 k, 하이퍼 튜브 개수 m
const [n, k, m] = input[0].split(' ').map(Number);
let graph = Array.from({length: n+1}, () => []);
for(let i = 1; i<=m; i++){
	const nums = input[i].split(' ').map(Number);
	for(let j = 0; j< nums.length; j++){
		graph[nums[j]].push(...nums.slice(j+1, nums.length))
	}
}
const queue = new Queue();
const visited = new Array(n+1).fill(0);

graph = graph.map(arr => [...new Set(arr)])

for(const num of graph[1]){
	queue.enqueue(num);
	visited[num] = 2;
}

while(queue.getLength() > 0){
	const num = queue.dequeue();
	for(const n of graph[num]){
		if(!visited[n]){
			visited[n] = visited[num] + 1;
			queue.enqueue(n);
		}
	}
}
console.log(visited[9] ? visited[9] : -1);
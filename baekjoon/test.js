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

let testCases = Number(input[0]);
let line = 1;

while(testCases--){
	// 정점의 개수(V), 간선의 개수(E)
	const [v,e] = input[line].split(' ').map(Number);
	const visited = Array.from({length: v+1}, () => -1)
	const graph = Array.from({length: v+1}, () => [])
	for(let i =1; i<=e; i++){
		const [a,b] = input[line+i].split(' ').map(Number);
		graph[a].push(b)
		graph[b].push(a)
	}
	// 미방문: -1, 빨강: 0, 파랑 1
	function bfs(x, graph, visited){
		queue = new Queue();
		queue.enqueue(x);
		visited[x] = 0; // 처음 노드 빨간색으로 칠하기
		while(queue.getLength() != 0){
			x = queue.dequeue();
			for(let y of graph[x]){
				if(visited[y] == -1){
					visited[y] = (visited[x]+1) % 2; // 빨강 <-> 파랑
					queue.enqueue(y);
				}
			}
		}
	}

	function isBipartite(graph, visited){
		for(let x =1; x < visited.length; x++){
			for(let y of graph[x]) if(visited[x] == visited[y]) return false;
		}
		return true;
	}
	for (let i =1; i<=v; i++){ // BFS를 이용해 색칠
		if(visited[i] == -1) bfs(i, graph, visited);
	}
	line+= e+1
	if(isBipartite(graph, visited)) console.log("YES");
	else console.log("NO");
}
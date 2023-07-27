const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Queue {
	constructor() {
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0; 
	}
	enqueue(x){
		this.items[this.tailIndex] = x;
		this.tailIndex++;
	}
	dequeue(){
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
// 작은수부터의 좌표를 알고 있어야 할 것 같다.

const [n, k] = input[0].split(' ').map(Number);
let graph = []; // 전체 보드 정보 담는 리스트;
let data = []; // 바이러스 대한 정보 리스트;

for(let i = 0; i< n; i++){
	graph.push(input[i+1].split(' ').map(Number));
	for(let j = 0; j<n; j++){
		// 해당 위치에 바이러스가 존재하는 경우
		if(graph[i][j] != 0){
			// 바이러스 종류 , 시간, 위치X , 위치Y 삽입
			data.push([graph[i][j], 0, i ,j])
		}
	}
}

// 정렬 이후에 큐로 옮기기(낮은 번호의 바이러스가 먼저 증식)
data.sort((a,b) => a[0]-b[0]);
const queue = new Queue();
for(let x of data){
	queue.enqueue(x);
}

let [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);

// 바이러스가 퍼져나갈수 있는 4가지 위치
let dx = [-1,0,1,0];
let dy = [0,1,0,-1];

// 너비 우선 탐색(BFS) 진행
while(queue.getLength() > 0){	
	let [virus, s , x, y] = queue.dequeue();
	// s초가 지나거나, 큐가 빌때 까지 반복
	if(s == targetS) break;
	for(let i = 0; i < 4; i++){
		let nx = x + dx[i];
		let ny = y + dy[i];
		// 해당 위치로 이동할 수 있는 경우
		if(nx >= 0 && nx < n && ny >= 0 && ny < n){
		// 아직 방문하지 않은 위치라면, 그 위치에 바이러스 넣기
		if(graph[nx][ny] == 0){
			graph[nx][ny] = virus;
			queue.enqueue([virus, s+1, nx ,ny]);
		}
		}
	}
}
console.log(graph[targetX - 1][targetY -1]);









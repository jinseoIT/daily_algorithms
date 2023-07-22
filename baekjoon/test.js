const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = Number(input[0])
let round = 1;
let line = 1;

class Queue {
	constructor() {
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0;
	}
	// 넣기
	enqueue(item){
	this.items[this.tailIndex] = item;
	this.tailIndex++;
	}
	//빼기
	dequeue(){
	const item = this.items[this.headIndex];
	delete this.items[this.headIndex];
	this.headIndex++;
	return item;
	}
	peek(){
		return this.items[this.headIndex];
	}
	getLength() {
		return this.tailIndex - this.headIndex;
	}

}

// 이동할 여덟 가지 방향 정의
const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

while(testCase--){
	const I = Number(input[line]);
	const current = input[line+1].split(' ').map(Number);
	const goal = input[line+2].split(' ').map(Number);
	const visited = Array.from({ length: I }, () => Array.from({ length: I }, () => 0));
	
	const dfs = () => {
		const queue = new Queue();
		queue.enqueue(current);
		while(queue.getLength() != 0){
			let cur = queue.dequeue();
			const [x,y] = cur;
			// 위치 도달
			if(x == goal[0] && y == goal[1]){
				console.log(visited[x][y]);
				return;
			}

			for(let i=0; i<8; i++){
				const [nx, ny] = [x+dx[i], y+dy[i]];
				//공간을 벗어난 경우 무시
				if( nx < 0 || nx >= I || ny < 0 || ny >=I) continue;
				//아직 방문하지 않았을 경우
				if(visited[nx][ny] === 0){
					visited[nx][ny] = visited[x][y] + 1;
					queue.enqueue([nx, ny])
				}
				
			}
		}
		
	}
	dfs();
	round++;
	line+=3
}
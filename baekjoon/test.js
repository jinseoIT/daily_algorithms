const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, k] = input[0].split(' ').map(Number);

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
const MAX  = 100001;
const visited = Array.from({length: MAX}).fill(0);

function bfs() {    
    const queue = new Queue();
    queue.enqueue(n);
    while(queue.getLength() != 0){
        let cur = queue.dequeue();
        if(cur == k){ // 위치 도달
            return visited[cur]; //최단 시간 출력
        }  
        for(let nxt of [cur - 1, cur + 1, cur * 2]){
            // 공간을 벗어난 경우는 무시
            if(nxt < 0 || nxt >= MAX) continue;
            // 아직 방문하지 않은 위치
            if(visited[nxt] === 0){
                visited[nxt] = visited[cur] + 1;
                queue.enqueue(nxt);
            }
        }
    }
}

console.log(bfs())


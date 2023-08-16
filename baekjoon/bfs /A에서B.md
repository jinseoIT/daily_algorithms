## A -> B - bfs

[문제링크](https://www.acmicpc.net/problem/16953)

### 🙏 문제
정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

2를 곱한다.
1을 수의 가장 오른쪽에 추가한다. 
A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

### ⌨️ 입력
첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

### 🎨 출력
A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.

### 💻 제출 코드

```javascript
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

const [A, B] = input[0].split(" ");

const queue = new Queue();
queue.enqueue([A, 0]) // (값, 최소 연산 횟수) 삽입
let visited = new Set();
let found = false;

while(queue.getLength() > 0){
	let [value, dist] = queue.dequeue();
	if(value > 1e9) continue; // 범위를 벗어나는 경우
	if(value == B){ // 목표 값에 도달한 경우
		console.log(dist+1); // 최소 연산 횟수 + 1 출력
		found = true;
		break;
	}
	for(let oper of ['*', '+']){
		let nextValue = value;
		if(oper == '*') nextValue *= 2; // 2를 곱하기;
		if(oper == '+') nextValue = nextValue*10 + 1;
		if((!visited.has(nextValue))){
			queue.enqueue([nextValue, dist+1]);
			visited.add(nextValue);
		}
	}
}
if(!found) console.log(-1); // 바꿀 수 없는 경우;

```

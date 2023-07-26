const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [s, t] = input[0].split(' ').map(Number);

if(s==t) {console.log(0); return;}

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

const bfs = s => {
	const queue = new Queue()
	queue.enqueue({val :s, opers : ''});
	let visited = new Set([s])
	while(queue.getLength() != 0 ){
		const {val, opers} = queue.dequeue(); 
		if(val > 1e9) continue; 
		if(val == t) return opers;
    for(let operator of ['*', '+', '-', '/']){
      let nextVal = val;
      if(operator === '*') nextVal *= val;
      if(operator === '+') nextVal += val;
      if(operator === '-') nextVal -= val;
      if(operator === '/') nextVal /= val;

      if(!visited.has(nextVal)){
        queue.enqueue({val: nextVal, opers: opers+operator})
        visited.add(nextVal);
		  }
    }
	}
}

const answer = bfs(s);
console.log(answer ? answer : -1)
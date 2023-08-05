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

export default Queue

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const cardCount = Number(input[0]);
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item){
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue(){
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.item[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
const cards = new Queue();
for(let i = 1; i<=cardCount; i++){
  cards.enqueue(i);
}
while(cards.getLength() > 1){
  cards.dequeue();
  const card = cards.dequeue();
  cards.enqueue(card);
}
console.log(cards.dequeue());



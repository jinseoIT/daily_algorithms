const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Queue {
  constructor(){
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
  isCheck(item){
      if(this.items[this.headIndex] == item) {
          return true;
      }    
      return false;
  }
}
function solution(cards1, cards2, goal) {
  let answer = true;
  const card1Queue = new Queue();
  const card2Queue = new Queue();
  cards1.forEach(word => card1Queue.enqueue(word));
  cards2.forEach(word => card2Queue.enqueue(word));
  
  for(let i = 0; i<goal.length; i++){
      const word = goal[i];
      if(card1Queue.isCheck(word)) {
          card1Queue.dequeue();
          continue;
      } 
      else if(card2Queue.isCheck(word)){
          card2Queue.dequeue();
          continue;
      }
      answer = false;
  }
  return answer ? 'Yes' : 'No';
}
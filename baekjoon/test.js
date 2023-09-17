const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 우선순위 먼저
// 우선순위가 같다면 Queue의 가장 뒤에 재배치 한다
function solution(priorities, location){
    let answer = 0;
    let queue = priorities;
    let indexArr = Array.from({length: queue.length}, (v,i) => i);
    indexArr[location] = 'target';

    while(1){
        if(queue[0] === Math.max(...queue)){
            answer +=1;
            if(indexArr[0] === 'target'){
                break;
            } else {
                queue.shift();
                indexArr.shift();
            }
        } else {
            queue.push(queue.shift());
            indexArr.push(indexArr.shift());
        }
    }
    return answer;
}

let n = Number(input[0]);
for(let i = 1; i<= n*2; i+=2){
    const [num, target] = input[i].split(' ').map(Number);
    const priorities = input[i+1].split(' ').map(Number);
    console.log(solution(priorities, target))
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
input = input.map(item=>+item);
let stack =[]
let result=''
let j = 1

for(let i=0; i<N; i++){
    
    while(j<=input[i]){
        stack.push(j);        
        result +='+ ';
        j++;
    }
	console.log('stack ::', stack);
    let num = stack.pop();
    if(num !== input[i]){
        result = "NO";
        break;
    }
    result +='- ' 
}
console.log(result.split(' ').join('\n'))
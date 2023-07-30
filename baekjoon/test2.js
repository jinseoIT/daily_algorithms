const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [k,n] = input[0].split(' ').map(v=> +v);
const nums = [];
for(let i =1; i<=k; i++){
	nums.push(+input[i]);
}

let min = 1;
let max = Math.max(...nums);
while(max >= min){
	let mid = Math.floor((min+max)/2);
	const cnt = nums.reduce((acc, curr) => acc + Math.floor(curr/mid), 0);
	if(cnt >= n) min = mid +1
	else max = mid - 1
}
console.log(max);
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]); 
const m = Number(input[1]); 

let d = new Array(50).fill(0)
d[0] = 1;
d[1] = 1;
d[2] = 2;

// 다이나믹 프로그래밍 수행 (피보나치 수열)
function dp(x) {
    if(d[x] != 0 ) return d[x];
    d[x] = dp(x - 1) + dp(x - 2);
    return d[x];
}

// VIP 좌석을 기준으로 몇 개씩 묶이는지 확인
let arr = [];
let start = 0;
for (let i = 2; i < m + 2; i++){
    end = Number(input[i]);
    arr.push(end - 1 - start);
    start = end;
}
arr.push(n - start);
// 각 묶음의 개수에 대하여 DP 테이블의 값 가져오기
let res = 1;
for(let x of arr) res *= dp(x);
console.log(res);
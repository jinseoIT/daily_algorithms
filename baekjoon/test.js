const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// 순서를 뒤집어 '최강 증가 부분 수열' 문제로 변환
arr.reverse();

// 다이나믹 프로그래밍을 위한 1차원 DP 테이블 초기화
dp = new Array(n).fill(1);

// 가장 긴 증가하는 부분 수열(LIS) 알고리즘 수행
for(let i = 1; i < n; i++){
    for(let j = 0; j < i; j++){
        if(arr[j] < arr[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
// 열외해야 하는 병사의 최소 수를 출력
console.log(n - Math.max(...dp));
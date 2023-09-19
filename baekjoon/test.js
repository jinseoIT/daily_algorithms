const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let dp = Array.from(Array(n+1), () => new Array(10).fill(0));

dp[1][0] = 0; // 0으로 시작하는 수는 계단수가 아님
for(let j = 1; j <= 9; j++) {
    dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) { // 점화식에 따라서 DP 테이블 채우기 
    for (let j = 0; j <= 9; j++) {
        dp[i][j] = 0; 
        if(j > 0) dp[i][j] += dp[i-1][j-1];
        if(j < 9) dp[i][j] += dp[i-1][j+1];
        dp[i][j] %= Number(1e9);
    }
}

let result = 0;
for (let j = 0; j <= 9; j++) {
    result += dp[n][j];
    result %= Number(1e9);
}
console.log(result);
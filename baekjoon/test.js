const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const dp = [0, 1, 2, 3];

for(let i = 3; i<=n; i++){ 
    dp[i] = (dp[i-1] + dp[i-2]) % 15746;
}
console.log(dp[n]);
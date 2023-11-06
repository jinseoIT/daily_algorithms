const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);

const dp = [1,2,4]
const getCount = (num) => {
  for(let i =0; i<num;i++){
    if(dp[i]) continue;
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
  }
  return dp[num-1]
}
for(let i =1; i<=T; i++){
  console.log(getCount(Number(input[i])));
}
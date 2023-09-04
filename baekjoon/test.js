const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]); 
const dp = [1,1,1,2,2,3,4,5,7,9]

const getNum = (num) => {
    if(dp[num-1]) return dp[num-1];
    for(let i = dp.length; i<num; i++){
        dp[i] = dp[i-1] + dp[i-5];
    }
    return dp[num-1];
}

const answer = [];
for(let i = 1; i<=n; i++){
    answer.push(getNum(input[i]));

}
console.log(answer.join('\n'));
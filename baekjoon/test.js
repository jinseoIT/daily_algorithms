const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const dp = [[1,0],[0,1]];

const getFibo = (num) => {
    for(let i=2; i<=num;i++){
        if(!dp[i]){
            dp[i] = [dp[i-1][0]+dp[i-2][0], dp[i-1][1]+dp[i-2][1]]
        }
    }
    console.log(`${dp[num][0]} ${dp[num][1]}`)
}

for(let i = 1; i<=n; i++){
    getFibo(input[i])
}  
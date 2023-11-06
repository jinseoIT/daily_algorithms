const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const passwordWithSite = {};
for(let i = 1; i<=N; i++){
  const [site, password] = input[i].split(" ");
  passwordWithSite[site] = password;
}
for(let i=N+1;i<=N+M; i++){
  const site = input[i];
  console.log(passwordWithSite[site]);
}

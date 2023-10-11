const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]); // row의 개수

const graph = [];

for(let i = 1; i<= n; i++){
    graph.push(input[i].split(''));
}
const visited = Array.from({length: n}, () => new Array(n).fill(false))

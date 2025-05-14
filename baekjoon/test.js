const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
input.shift();

const meetings = input
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같으면 시작 시간 빠른 순
    return a[1] - b[1]; // 끝나는 시간 기준 정렬
  });

let count = 0;
let endTime = 0;

for (let i = 0; i < N; i++) {
  const [start, end] = meetings[i];
  if (start >= endTime) {
    endTime = end;
    count++;
  }
}

console.log(count);

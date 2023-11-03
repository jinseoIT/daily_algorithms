const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// N : 제곱정수, r : 행 c : 열
const [N, r ,c] = input[0].split(" ").map(Number);

let res = 0;
const divide = (row, col, size) => {
  if (row === r && col === c) {
    // 해당 좌표
    console.log(res);
    return;
  }
  if (r >= row && r < row + size && c >= col && c < col + size) {
    // 영역 해당
    size = parseInt(size / 2);
    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
  } else res += size * size; // 영역 이외
};

divide(0, 0, Math.pow(2, N));
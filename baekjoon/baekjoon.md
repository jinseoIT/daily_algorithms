## 🐬 백준 문제 정리

백준에서 풀어본 문제들을 정리한 리스트

## 📚 타입 별 정리

### DFS

- [01 바이러스](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4.md)

## 백준 vscode에서 동작

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
```

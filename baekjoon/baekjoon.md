## 🐬 백준 문제 정리

백준에서 풀어본 문제들을 정리한 리스트

## 📚 타입 별 정리

### DFS

- [01 바이러스](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4.md)
- [02 노드사이의 거리](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%EB%85%B8%EB%93%9C%EC%82%AC%EC%9D%B4%EC%9D%98%20%EA%B1%B0%EB%A6%AC.md)
- [03 트리](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%ED%8A%B8%EB%A6%AC.md)
- [04 치킨배달](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%EC%B9%98%ED%82%A8%EB%B0%B0%EB%8B%AC.md)
- [05 단지번호붙이기](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/dfs/%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0.md)

### BFS

- [01 숨바꼭질](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/bfs%20/%EC%88%A8%EB%B0%94%EA%BC%AD%EC%A7%88.md)
- [02 나이트의 이동](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/bfs%20/%EB%82%98%EC%9D%B4%ED%8A%B8%EC%9D%98%EC%9D%B4%EB%8F%99.md)
- [03 이분그래프](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/bfs%20/%EC%9D%B4%EB%B6%84%EA%B7%B8%EB%9E%98%ED%94%84.md)
- [04 4연산](https://github.com/jinseoIT/daily_algorithms/blob/main/baekjoon/bfs%20/4%EC%97%B0%EC%82%B0.md)

## 백준 vscode에서 동작

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
```

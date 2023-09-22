## RGB거리 - dp(Silver1)

[문제링크](https://www.acmicpc.net/problem/10844)

### 🙏 문제
RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.

집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

1번 집의 색은 2번 집의 색과 같지 않아야 한다.
N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.

### ⌨️ 입력
첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.

### 🎨 출력
첫째 줄에 모든 집을 칠하는 비용의 최솟값을 출력한다.

### 💻 제출 코드

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]); // 집의 개수

arr = [];
d = [];
for(let i = 0; i < n; i++){
    let [r, g, b] = input[i + 1].split(' ').map(Number);
    // 가능한 최댓값으로 초기화
    d.push(new Array(3).fill(1000000));
    arr.push([r,g,b]);
}
// 첫 번째 집은 그대로 최솟값으로 기록
d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

// 요구사항 : 인접한 집이 동일한 색을 안 쓸 때, 색칠하는 모든 경우의 수 계산
for(let i = 1; i < n; i++){ // 집을 하나씩 확인하며
    for(let j = 0; j < 3; j++){ // j번째 색을 사용할 때의 최솟값은?
        for(let k = 0; k < 3; k++){ // 앞집에서 k번째 색을 쓴다면
            if(j != k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k]);
        }
    }
}
console.log(Math.min(d[n-1][0], d[n-1][1], d[n-1][2]));

```

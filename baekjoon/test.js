const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// n 지도의 크기
const n = Number(input[0]);
const map = [];
const houses = [];

for(let i = 1; i<=n; i++){
    const line = input[i].split('').map(Number)    
    map.push(line);
    for(let j =0; j<line.length; j++){
        // 집일 경우
        if(line[j] == 1) houses.push([i-1,j]);
    }
}
// 방문 여부 확인 
const visited = Array.from({length: n}, () => Array.from({length:n}, () => false));
let cntArr = [];
let cnt = 0;
const dfs = (a,b) => {
    if(visited[a][b]) return;
    cnt++;
    visited[a][b] = true;
    //오른쪽 확인
    if(b+1<n && map[a][b+1]){
        dfs(a,b+1)
    }
    //왼쪽 확인
    if(b-1>=0 && map[a][b-1]){
        dfs(a,b-1)
    }
    //아래 확인
    if(a+1<n && map[a+1][b]) {
        dfs(a+1,b)
    }
    //위 확인
    if(a-1>=0 && map[a-1][b]){
        dfs(a-1,b)
    }
    return;
}

for(let i =0; i<houses.length; i++){
    const [a,b] = houses[i];
    if(visited[a][b]) continue;
    cnt = 0;
    dfs(a,b)
    cntArr.push(cnt)
}

cntArr = cntArr.sort((a,b) => a-b);
console.log(cntArr.length + '\n' + cntArr.join('\n'))

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let line = 0;
let caseNum = 1;

while(true){
    const [n,m] = input[line].split(' ').map(Number);
    if(n == 0  && m == 0) break;
    
    const graph = [];
    for(let i =1; i<=n;i++) graph[i] = [];
    for(let i =1; i<=m;i++){
      const [x,y] = input[line+i].split(' ').map(Number);
      graph[x].push(y);
      graph[y].push(x);
    }
    
    const visited = new Array(n+1).fill(false);
    let cnt = 0;
    const isCycle = (x, prev) => {
        visited[x] = true; // 방문 처리
        // 인접 노드
        for(let num of graph[x]){
            // 방문하지 않았다면
            if(!visited[num]){
                if(isCycle(num, x)) return true;
            }
            // 이미 방문, 재귀 호출 노드가 전 노드가 아닐시 사이클
            else if(num !== prev) return true;
        }
        return false;
    }

    for(let i = 1; i<=n; i++){
        if(!visited[i]) {
            if(!isCycle(i,0)) cnt++
        }
    }
    if(cnt == 0) console.log(`Case ${caseNum}: No trees.`);
    else if (cnt == 1) console.log(`Case ${caseNum}: There is one tree.`);
    else console.log(`Case ${caseNum}: A forest of ${cnt} trees.`);
    line += m+1;
    caseNum++;
}


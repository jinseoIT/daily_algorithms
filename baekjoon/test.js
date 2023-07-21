const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// n : 도시 정보 , m : 남을 치킨집 수
const [n, m] = input[0].split(" ").map(Number);

const chickenStores = [];
const houses = [];
for(let i =1; i<=n; i++){
    const row = input[i].split(" ").map(Number);
    for(let j = 0; j<n; j++){
        if(row[j] == 1) houses.push([i, j+1]);
        else if(row[j] == 2) chickenStores.push([i, j+1]);
    }
}

let visited = new Array(chickenStores.length).fill(false); // 치킨집 방문 확인
let selected = [];
let answer = 1e9
console.log("chickenStores ::", chickenStores);
function dfs(depth, start){
    if(depth === m){ // 조합 확인
        const result = [];
        for(let i of selected) result.push(chickenStores[i])
        let sum = 0;
        for(let [hx,hy] of houses){
            let temp = 1e9;
            for(let [cx,cy] of result){
                temp = Math.min(temp, Math.abs(hx-cx)+Math.abs(hy-cy));
            }
            sum+=temp;
        }
        answer = Math.min(answer, sum)
        console.log("answer ::", answer);
        return
    }
    console.log(`start::::`, start)
    // start 지점부터 하나씩 원소 index를 확인
    for(let i = start; i<chickenStores.length; i++){
        if(visited[i]) continue; 
        selected.push(i); // 현재 원소 선택
        visited[i] = true;
        dfs(depth+1, i+1);
        console.log(`${i} 1111`, selected);
        selected.pop(); // 현재 원소 선택 취소
        console.log(`${i} 2222`, selected);
        visited[i] = false;
    }
}
dfs(0,0);
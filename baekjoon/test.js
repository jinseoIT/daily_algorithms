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
let selected = [];
let answer = 1e9

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
        return
    }
    
    // start 지점부터 하나씩 원소 index를 확인
    for(let i = start; i<chickenStores.length; i++){
        selected.push(i); // 현재 원소 선택
        dfs(depth+1, i+1);
        selected.pop(); // 현재 원소 선택 취소
    }
}
dfs(0,0);
console.log(answer)
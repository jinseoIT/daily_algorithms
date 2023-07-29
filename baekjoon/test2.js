const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
let words = [];

for(let i = 1; i<=n; i++){
	words.push(input[i]);
}
words = new Set(words);
words = [...words].sort((a,b) => {
	if(a.length < b.length) return -1;
	if(b.length > a.length) return 1;
	if(a.length == b.length){
		return a < b ? -1 : 1;
	};
	return 0;
})

words.forEach(v=> {
	console.log(v);
})

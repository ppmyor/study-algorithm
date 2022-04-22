const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const inputValue = parseInt(input[0]);
let answer = 0;

for (let i = 1; i <= inputValue; i++) {
    answer += i;
}
console.log(answer);

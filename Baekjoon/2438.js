const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= testCase; i++) {
    answer += "*";
    console.log(answer);
}

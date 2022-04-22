const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = parseInt(input[0]);
let answer = "";

for (let i = testCase; i > 0; i--) {
    answer += i + "\n";
}

console.log(answer);

// 시간초과 문제로 변수에 값과 개행문자를 삽입하여 마지막에 출력

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = parseInt(input[0]);
const numbers = input[1];
let answer = 0;

for (let i = 0; i < testCase; i++) {
    const number = numbers.substring(i, i + 1);
    answer += parseInt(number);
}

console.log(answer);

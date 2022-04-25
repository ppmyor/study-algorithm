const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

for (let i = 1; i <= testCase; i++) {
    let answer = "";
    for (let j = testCase - i; j > 0; j--) {
        answer += " ";
    }
    for (let k = 1; k <= i; k++) {
        answer += "*";
    }
    console.log(answer);
}

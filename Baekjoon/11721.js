const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const sentence = input[0];
let answer = "";

for (let i = 0; i <= sentence.length; i += 10) {
    answer += sentence.substring(i, i + 10);
    answer += "\n";
}

console.log(answer);

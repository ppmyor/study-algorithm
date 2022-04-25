const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

const star = "*";

for (let i = testCase; i > 0; i--) {
    console.log(star.repeat(i));
}

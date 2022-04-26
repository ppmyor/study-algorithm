const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

const star = "*";
const blank = " ";

for (let i = 0; i < testCase; i++) {
    console.log(blank.repeat(i) + star.repeat((testCase - i) * 2 - 1));
}

for (let i = testCase - 2; i >= 0; i--) {
    console.log(blank.repeat(i) + star.repeat((testCase - i) * 2 - 1));
}

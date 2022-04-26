const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

const star = "*";
const blank = " ";

for (let i = 1; i <= testCase; i++) {
    console.log(star.repeat(i) + blank.repeat((testCase - i) * 2) + star.repeat(i));
}

for (let i = testCase - 1; i > 0; i--) {
    console.log(star.repeat(i) + blank.repeat((testCase - i) * 2) + star.repeat(i));
}

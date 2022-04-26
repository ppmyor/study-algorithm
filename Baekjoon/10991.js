const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

const star = "*";
const blank = " ";

for (let i = 1; i <= testCase; i++) {
    console.log(blank.repeat(testCase - i) + (star + blank).repeat(i));
}

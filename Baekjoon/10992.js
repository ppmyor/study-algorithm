const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = parseInt(input[0]);

const star = "*";
const blank = " ";

for (let i = 1; i <= testCase; i++) {
    if (i === 1) {
        console.log(blank.repeat(testCase - i) + star.repeat(i));
    } else if (i === testCase) {
        console.log(star.repeat(i * 2 - 1));
    } else {
        console.log(blank.repeat(testCase - i) + star + blank.repeat(i * 2 - 3) + star);
    }
}

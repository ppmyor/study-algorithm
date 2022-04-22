const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${testCase} * ${i} = ${testCase * i}`);
}

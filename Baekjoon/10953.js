const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    const numbers = input[i].split(",");
    const a = Number(numbers[0]);
    const b = Number(numbers[1]);

    console.log(a + b);
}

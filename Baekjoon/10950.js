const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);

for (let i = 1; i <= testCase; i++) {
    const numbers = input[i].split(" ");
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);

    console.log(a + b);
}

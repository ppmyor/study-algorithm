const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCase = parseInt(input[0]);
const numbers = input[1].split(" ").map((item) => parseInt(item));

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < testCase; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(min, max);

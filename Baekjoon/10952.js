const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
    const numbers = input[i].split(" ");
    const a = Number(numbers[0]);
    const b = Number(numbers[1]);

    console.log(a + b);
}

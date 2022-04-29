const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = parseInt(input[0]);
let result = "";

const gcd = (i, j) => {
    if (j === 0) {
        return i;
    }
    return gcd(j, i % j);
};

for (let i = 1; i <= testCase; i++) {
    const numbers = input[i].split(" ");
    const a = parseInt(numbers[0]);
    const b = parseInt(numbers[1]);

    const [num1, num2] = [Math.max(a, b), Math.min(a, b)];

    const gcdResult = gcd(num1, num2);
    const lcdResult = (a * b) / gcdResult;

    result += lcdResult + "\n";
}

console.log(result);

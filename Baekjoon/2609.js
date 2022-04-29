const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const [num1, num2] = [Math.max(a, b), Math.min(a, b)];

const gcd = (i, j) => {
    if (j === 0) {
        return i;
    }
    return gcd(j, i % j);
};

const gcdResult = gcd(num1, num2);
const lcdResult = (a * b) / gcdResult;

console.log(gcdResult);
console.log(lcdResult);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const maxNum = Math.max(...input);
let isPrime = new Array(maxNum + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;
let arr = [];
let answer = "";

for (let i = 2; i <= Math.ceil(Math.sqrt(maxNum)); i++) {
  if (isPrime[i]) {
    for (let j = 2; j <= maxNum / i; j++) {
      isPrime[i * j] = false;
    }
  }
}

for (let m = maxNum; m >= 2; m--) {
  if (isPrime[m] && m % 2 !== 0) {
    arr.push(m);
  }
}

for (let i = 0; i < input.length - 1; i++) {
  for (let j in arr) {
    if (arr[j] <= input[i]) {
      const found = arr.find((v) => v === input[i] - arr[j]);
      if (found !== undefined) {
        answer += `${input[i]} = ${found} + ${arr[j]}\n`;
        break;
      }
    }
  }
}
console.log(answer.trim());

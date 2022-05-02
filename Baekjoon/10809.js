const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(-1);

input.forEach((i) => (counts[alphabet.indexOf(i)] = input.indexOf(i)));

console.log(counts.join(" "));

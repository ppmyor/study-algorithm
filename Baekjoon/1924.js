const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const month = parseInt(input[0]);
const day = parseInt(input[1]);
let answer = 0;

for (let i = 0; i < month; i++) {
    if (i === 0) {
        answer = 0;
    } else if (i === 2) {
        answer += 28;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
        answer += 30;
    } else {
        answer += 31;
    }
}

answer += day;

switch (answer % 7) {
    case 0:
        console.log("SUN");
        break;
    case 1:
        console.log("MON");
        break;
    case 2:
        console.log("TUE");
        break;
    case 3:
        console.log("WED");
        break;
    case 4:
        console.log("THU");
        break;
    case 5:
        console.log("FRI");
        break;
    case 6:
        console.log("SAT");
        break;
}

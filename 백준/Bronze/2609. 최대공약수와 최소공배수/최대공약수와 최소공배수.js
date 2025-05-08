function getGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getLCM(a, b) {
  return (a * b) / getGCD(a, b);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [num1, num2] = input.split(" ").map(Number);

const gcd = getGCD(num1, num2);
const lcm = getLCM(num1, num2);

console.log(gcd);
console.log(lcm);
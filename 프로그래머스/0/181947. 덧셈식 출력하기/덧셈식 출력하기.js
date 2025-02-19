const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a,b;
rl.on('line', function (line) {
    [a, b] = line.split(' ').map(Number);
}).on('close', function () {
    console.log(`${a} + ${b} = ${a+b}`);
});
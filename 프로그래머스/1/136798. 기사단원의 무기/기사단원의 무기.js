function countDivisors(number) {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            cnt += (i === number / i) ? 1 : 2; 
        }
    }
    return cnt;
}

function solution(number, limit, power) {
    
    let divisors = [];
    let totalSum = 0;
    for(let i=1;i<=number;i++){
        let result = countDivisors(i) <= limit ? countDivisors(i) : power;
        totalSum += result;
        divisors.push(result);
    }

    return totalSum;
}
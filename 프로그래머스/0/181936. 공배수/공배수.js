function solution(number, n, m) {
    const result = m !== 1 && number % n === 0 && number % m === 0 ;
    return result ? 1 : 0;
}
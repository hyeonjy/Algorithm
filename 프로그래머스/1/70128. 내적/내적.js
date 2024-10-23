function solution(a, b) {
    let sum = a.reduce((acc,cur,idx) => acc += cur*b[idx], 0)
    return sum;
}
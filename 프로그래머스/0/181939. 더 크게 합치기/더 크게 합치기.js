function solution(a, b) {
    const result = Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
    return result;
}
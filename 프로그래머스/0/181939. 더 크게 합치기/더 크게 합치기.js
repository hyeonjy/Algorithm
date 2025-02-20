function solution(a, b) {
    const result = Math.max(Number(String(a)+String(b)), Number(String(b)+String(a)))
    return result;
}
function solution(arr, n) {
    return arr.map((a, idx)=> arr.length % 2 !== idx % 2 ? a+n:a);
}
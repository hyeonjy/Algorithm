function solution(q, r, code) {
    return Array.from(code).filter((_,idx)=> idx % q === r).join("");
}
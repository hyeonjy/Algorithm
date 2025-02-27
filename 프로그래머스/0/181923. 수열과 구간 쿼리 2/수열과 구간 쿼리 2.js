function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const result = arr.slice(s, e + 1).filter(num => num > k);
        return result.length > 0 ? Math.min(...result) : -1;
    });
}
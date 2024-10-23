function solution(left, right) {
    let result = 0;
    
    for(let i=left;i<=right;i++){
        let count = 0;
        for(let j=1;j<=i;j++){
            if(i % j === 0) count++;
        }
        result += count % 2 === 0 ? i : -1*i;
    }
    return result;
}
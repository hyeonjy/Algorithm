function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i=0;i<intStrs.length;i++){
        let num = Number(intStrs[i].slice(s,s+l));
        if(num > k){
            answer.push(num);
        }
    }
    return answer;
}
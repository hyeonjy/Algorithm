function solution(k, score) {
    let process = [];
    return score.map((s,idx)=>{
        process.push(s);
        process.sort((a,b) => b-a);
        
        if(idx < k) return process[process.length-1];
        else return process[k-1];
    })
}
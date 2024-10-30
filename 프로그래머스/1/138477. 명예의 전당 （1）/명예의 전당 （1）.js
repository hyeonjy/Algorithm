function solution(k, score) {
    let winners = [];
    return score.map((s,idx)=>{
        winners.push(s);
        winners.sort((a,b) => b-a);
        if(idx < k) return winners[winners.length-1];
        else return winners[k-1];
    })
}
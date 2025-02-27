function solution(arr, queries) {
    let answer = [];
    for(let i=0;i<queries.length;i++){
        let min = Infinity;
        for(let j=queries[i][0];j<=queries[i][1];j++){
            if(arr[j] > queries[i][2] && min > arr[j]){
                min = arr[j];
            }
        }
        
        answer.push(min === Infinity ? -1 : min);
    }
    return answer;
}
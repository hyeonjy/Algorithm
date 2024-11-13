function solution(answers) {
    const num1 = [1,2,3,4,5];
    const num2 = [2,1,2,3,2,4,2,5];
    const num3 = [3,3,1,1,2,2,4,4,5,5];
    
    let cnt = [0,0,0];

    for(let i=0;i<answers.length;i++){
        if(answers[i] === num1[i%5]) cnt[0]++;
        if(answers[i] === num2[i%8]) cnt[1]++;
        if(answers[i] === num3[i%10]) cnt[2]++;
    }
    let max = Math.max(...cnt);
    let maxArr = [];
    for(let i=0;i<cnt.length;i++){
        if(max === cnt[i]) {
            maxArr.push(i+1);
        }
    }
    return maxArr;
}
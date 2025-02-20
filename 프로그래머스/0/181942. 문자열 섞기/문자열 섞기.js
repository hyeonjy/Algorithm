function solution(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length);
    let j = 0;
    let answer = "";
    
    for(let i=0;i<maxLength;){
        if(j === 0){
            answer += str1[i];
            j++;
        }
        else{
             answer += str2[i];
            i++;
            j = 0;
        }
    }
    return answer;
}
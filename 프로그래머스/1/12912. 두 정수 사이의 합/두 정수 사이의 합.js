function solution(a, b) {
    let sum = 0
    if(a > b) b = [a, a = b][0];
    
    for(let i=a;i<=b;i++){
        sum+=i;
    }
    return sum;
}
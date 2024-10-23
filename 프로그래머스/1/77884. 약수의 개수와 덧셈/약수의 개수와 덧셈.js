function isEven(num){
    let count = 0;
    for(let i=1;i<=num;i++){
        if(num % i === 0) count++; 
    }
    console.log("cnt: ", count);
    return count % 2 === 0 ? num : -1*num;
}

function solution(left, right) {
    let result = 0;
    for(let i=left;i<=right;i++){
        result += isEven(i);
    }
    return result;
}
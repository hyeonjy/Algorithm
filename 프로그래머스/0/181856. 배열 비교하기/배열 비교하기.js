function solution(arr1, arr2) {
    let result = arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : 0;
    
    if(result === 0){
        let sum1 = arr1.reduce((acc,cur)=> acc+cur);
        let sum2 = arr2.reduce((acc,cur)=> acc+cur);
        if(sum1 > sum2){
            result = 1;
        }
        else if(sum1 < sum2){
            result = -1;
        }
    }
    return result; 
}
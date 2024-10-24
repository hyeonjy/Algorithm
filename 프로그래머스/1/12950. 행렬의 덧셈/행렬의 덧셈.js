function solution(arr1, arr2) {
    let result = [];
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i].map((x,y)=>x + arr2[i][y]));
    }
    return result;
}
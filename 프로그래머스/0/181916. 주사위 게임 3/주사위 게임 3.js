function solution(a, b, c, d) {
    let arr = [a,b,c,d];
    arr.sort((a,b) => a - b);
    
    if(arr[0] === arr[3]) return 1111*a
    else if(arr[0] === arr[2]) return  (10 * arr[0] + arr[3])**2;
    else if(arr[1] === arr[3]) return (10 * arr[1] + arr[0])**2;
    else if(arr[0] === arr[1] && arr[2] === arr[3]) return (arr[0]+arr[2])*Math.abs(arr[0]-arr[2]);
    else if(arr[0] === arr[1]) return arr[2]*arr[3];
    else if(arr[1] === arr[2]) return arr[0]*arr[3];
    else if(arr[2] === arr[3]) return arr[0]*arr[1];
    else return Math.min(...arr);
}
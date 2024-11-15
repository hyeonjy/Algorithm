function solution(s) {
    var mid = s.length / 2;
    var newStr = s.length % 2 === 0 ? s.slice(mid-1,mid+1) : s.slice(mid,mid+1) ;
    return newStr
}
function solution(a, b, c) {
    let result = a + b + c;
    if(a === b && b === c){
       result *= (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c )
    }
    else if(a === b || b === c || c === a){
        result *= (a*a + b*b + c*c )
    }
    
    return result;
}
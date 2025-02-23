function solution(a, b, c) {
    let result = a + b + c;
    if(a === b && b === c){
       result *= (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 );
    }
    else if(a === b || b === c || c === a){
        result *=  (a**2 + b**2 + c**2 );
    }
    
    return result;
}
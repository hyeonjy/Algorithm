function solution(ineq, eq, n, m) {
    let result;
    if(eq === "="){
        result =  ineq === ">" ? n >=m : n <=m;
    }
    else{
        result =  ineq === ">" ? n > m : n < m;
    }
    return +result;
}
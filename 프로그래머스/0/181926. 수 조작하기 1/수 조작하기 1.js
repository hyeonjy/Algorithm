function solution(n, control) {
    let result = n;
    for(let i=0;i<control.length;i++){
        if(control[i] === "w"){
            result++;
        }
        else if(control[i] === "s"){
            result--;
        }
        else if(control[i] === "d"){
            result+=10;
        }
        else if(control[i] === "a"){
            result-=10;
        }
    }
    return result;
}
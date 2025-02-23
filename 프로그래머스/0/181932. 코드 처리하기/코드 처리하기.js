function solution(code) {
    let mode = 0;
    let ret = "";
    for(let idx=0;idx<code.length;idx++){
        if(code[idx] !== "1" && idx % 2 === mode){
                  ret += code[idx];
        }
        else if(code[idx] === "1"){
            mode = +!mode;
        }
    }
    
    return ret === "" ? "EMPTY" : ret;
}
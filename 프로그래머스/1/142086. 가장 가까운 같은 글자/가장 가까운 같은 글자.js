function solution(s) {
    return s.split("").map((ch, idx)=>{
        let index = s.slice(0,idx).lastIndexOf(ch);
        if(index !== -1) index = index*(-1) + idx;
        return index;
    })    
}
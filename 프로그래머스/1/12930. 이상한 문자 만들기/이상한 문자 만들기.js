function solution(s) {
    return s.split(" ").map((str)=> {
        let temp = "";
        for(let i=0;i<str.length;i++){
            if(i % 2 === 0) temp += str[i].toUpperCase();
            else temp += str[i].toLowerCase();
        }
        return temp;
    }).join(" ");
}
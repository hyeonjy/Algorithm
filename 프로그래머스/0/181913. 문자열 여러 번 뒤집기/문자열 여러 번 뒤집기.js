function solution(my_string, queries) {
    let str = my_string.split('');
    
    for (let [s, e] of queries) {
        let reversedStr = str.slice(s, e + 1).reverse();
        str.splice(s, e - s + 1, ...reversedStr);
    }
    
    return str.join('');
}
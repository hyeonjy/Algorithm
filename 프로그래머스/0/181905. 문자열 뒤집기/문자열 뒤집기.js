function solution(my_string, s, e) {
    let str = my_string.slice(0, s);
    for (let i = e; i >= s; i--) {
        str += my_string[i];
    }
    return str + my_string.slice(e + 1);
}
function solution(num_list) {
    let length = num_list.length-1;
    let minus = num_list[length]-num_list[length-1];
    num_list.push(minus > 0 ? minus : num_list[length]*2);
    return num_list;
}
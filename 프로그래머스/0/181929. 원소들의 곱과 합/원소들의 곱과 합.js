function solution(num_list) {
    const multiply = num_list.reduce((acc, cur) => acc * cur, 1);
    const sum = num_list.reduce((acc, cur) => acc + cur, 0);
    
    return multiply < sum * sum ? 1 : 0;
}
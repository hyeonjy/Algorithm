function solution(price, money, count) {
    let total = price*(1+count)*count/2;
    return total - money > 0 ? total - money : 0;
}
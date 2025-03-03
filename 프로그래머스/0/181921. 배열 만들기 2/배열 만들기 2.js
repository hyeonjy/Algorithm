function solution(l, r) {
    let result = [];
    
    for (let i = l; i <= r; i++) {
        let num = i;
        let isValid = true;
        
        while (num > 0) {
            let digit = num % 10;
            if (digit !== 0 && digit !== 5) {
                isValid = false;
                break;
            }
            num = Math.floor(num / 10);
        }
        
        if (isValid) {
            result.push(i);
        }
    }
    
    return result.length > 0 ? result : [-1];
}
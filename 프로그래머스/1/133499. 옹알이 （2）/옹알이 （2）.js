function solution(babbling) {
    const results = ["aya", "ye", "woo", "ma"];
    let cnt = 0;

    for (let word of babbling) {
        let isValid = true; 
        let prevResult = ""; 

        for (let result of results) {
            // 연속된 발음
            if (word.includes(result + result)) {
                isValid = false;
                break;
            }
        }

        if (!isValid) continue;

        while (word.length > 0) {
            let matched = false;

            for (let result of results) {
                if (word.startsWith(result)) {
                    if (prevResult === result) { 
                        isValid = false;
                        break;
                    }
                    word = word.slice(result.length); 
                    prevResult = result; 
                    matched = true;
                    break;
                }
            }

            if (!matched) { 
                isValid = false;
                break;
            }

            if (!isValid) break;
        }

        if (isValid && word === "") cnt++; // 유효하고 모든 문자열이 비워지면 카운트 증가
    }

    return cnt;
}
function solution(babbling) {
    const results = ["aya", "ye", "woo", "ma"];
    let cnt = 0;

    for (let word of babbling) {
        let prev = ""; 
        let isValid = true;

        while (word.length > 0) {
            let found = false;

            for (let result of results) {
                if (word.startsWith(result)) {
                    if (result === prev) {
                        isValid = false;
                        break;
                    }
   
                    word = word.slice(result.length);
                    prev = result;
                    found = true;
                    break;
                }
            }

            if (!found) {
                isValid = false;
                break;
            }
        }

        if (isValid) cnt++;
    }

    return cnt;
}
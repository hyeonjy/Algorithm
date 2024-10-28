function solution(s, n) {
    const result = s.split("").map((c) => {
        let ch = c;
        if (ch !== " ") {
            const base = ch === ch.toUpperCase() ? 65 : 97;
            ch = String.fromCharCode(((ch.charCodeAt() - base + n) % 26) + base);
        }
        return ch;
    }).join("");
    return result;
}
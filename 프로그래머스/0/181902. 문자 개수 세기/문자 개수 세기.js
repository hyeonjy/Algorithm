function solution(my_string) {
    const counts = Array(52).fill(0); 

  for (let char of my_string) {
    const ch = char.charCodeAt(0);

    if (ch >= 65 && ch <= 90) {
      counts[ch - 65]++;
    } else if (ch >= 97 && ch <= 122) {
      counts[26 + (ch - 97)]++;
    }
  }

  return counts;
}
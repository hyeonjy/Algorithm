function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let result = 0;
  babbling.forEach((b) => {
    arr.forEach((a) => {
      b = b.replaceAll(a, " ");
    });
    if (b.trim().length === 0) result++;
  });
  return result;
}
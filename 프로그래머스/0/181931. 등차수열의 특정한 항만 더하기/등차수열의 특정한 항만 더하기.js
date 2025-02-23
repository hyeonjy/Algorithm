function solution(a, d, included) {
  let result = 0;

  for (let i = 0, j = a; i < included.length; i++, j += d) {
    if (included[i]) {
      result += j;
    }
  }

  return result;
}
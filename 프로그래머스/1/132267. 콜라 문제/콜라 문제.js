function solution(a, b, n) {
  let bottle = n;
  let total = 0;
  let rest = 0;
  while (bottle > 0) {
    if (Math.floor(bottle / a) === 0 && rest > 0) {
      bottle = bottle + rest;
      rest = 0;
    } else {
      rest += bottle % a;
      bottle = Math.floor(bottle / a) * b;
      total += bottle;
    }
  }
  return total;
}
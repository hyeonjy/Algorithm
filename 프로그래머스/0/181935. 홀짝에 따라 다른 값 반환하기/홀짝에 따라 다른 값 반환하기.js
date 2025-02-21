function solution(n) {
  const isEven = n % 2 === 0;
  let sum = 0;
  if (isEven) {
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  }
  return sum;
}
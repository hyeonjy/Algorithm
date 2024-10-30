function solution(a, b) {
  let dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let weeks = [3, 7, 6, 3, 1, 5, 3, 7, 4, 2, 6, 4];

  let rest;
  if (b % 7 >= weeks[a - 1]) rest = (b % 7) - weeks[a - 1];
  else rest = (b % 7) + 7 - weeks[a - 1];
  return dates[rest];
}

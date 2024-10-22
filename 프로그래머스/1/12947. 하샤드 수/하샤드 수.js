function solution(x) {
  var n = (x + "")
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  return x % n === 0;
}
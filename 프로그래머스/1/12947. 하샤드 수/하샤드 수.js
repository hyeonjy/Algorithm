function solution(x) {
  var sum = (x + "").split("").reduce((acc, cur) => +acc + +cur);
  return x % sum === 0;
}
function solution(n)
{
      let arr = (n + "").split("");
      return arr.reduce((acc, cur) => acc + parseInt(cur), 0);
}
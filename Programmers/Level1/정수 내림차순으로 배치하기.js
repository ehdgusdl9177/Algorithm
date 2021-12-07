function solution(n) {
  let strN = n.toString().split("");
  strN.sort((a, b) => b - a);
  return Number(strN.join(""));
}

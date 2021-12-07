function solution(n) {
  let strN = n.toString().split("");

  return strN.reduce((acc, cur) => acc + Number(cur), 0);
}

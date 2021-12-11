function solution(n) {
  let answer = [];
  let strN = n.toString().split("").reverse();
  let nLen = strN.length;

  for (let i = 0; i < nLen; i++) {
    answer.push(Number(strN[i]));
  }

  return answer;
}

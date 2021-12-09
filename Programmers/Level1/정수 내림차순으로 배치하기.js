function solution(n) {
  // 문자열로 변환 후 쪼개고 내림차순으로 정렬 마지막에 합치고 숫자로 바꾸며 리턴
  let strN = n.toString().split("");
  strN.sort((a, b) => b - a);
  return Number(strN.join(""));
}

function solution(n) {
  // 문자열로 변환 후 쪼개기
  let strN = n.toString().split("");

  // reduce로 각 자리 숫자를 더해준다.(문자열은 Number로 변환)
  return strN.reduce((acc, cur) => acc + Number(cur), 0);
}

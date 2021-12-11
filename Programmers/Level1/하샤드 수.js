function solution(x) {
  // 문자열로 변환 후 쪼개고 리듀스로 합 구함
  // 나머지가 0이면 true 아니면 false
  let sumX = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  if (x % sumX === 0) return true;
  else return false;
}

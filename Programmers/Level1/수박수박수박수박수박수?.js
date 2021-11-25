function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    // 만약 i 번째가 홀수 일때 "수"를 할당
    if (i % 2 === 1) {
      answer += "수";
    }
    // 만약 i 번째가 짝수 일때 "박"을 할당
    else if (i % 2 === 0) {
      answer += "박";
    }
  }
  return answer;
}

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    // 만약 n을 i로 나누었을 때 나머지가 0이라면 더해준다.
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

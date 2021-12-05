function solution(num) {
  // num을 2로 나누어서 나머지가 0일 때는 짝수, 나머지가 0아 아닐 때는 홀수 반환
  return num % 2 === 0 ? "Even" : "Odd";
}

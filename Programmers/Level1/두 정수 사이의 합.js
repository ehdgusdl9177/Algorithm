function solution(a, b) {
  let answer = 0;

  // min과 max 의 값을 변수에 선언
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  // 만약 인자로 들어온 a 와 b 가 같다면 a or b 할당
  if (a === b) {
    answer = a;
  }
  // 같이 않다면 반복문을 통해 min과 Max 사이의 수를 합한다.
  else {
    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

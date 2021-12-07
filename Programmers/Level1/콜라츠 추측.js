function solution(num) {
  // 재귀함수를 이용
  let count;
  const collatz = (input, count) => {
    if (count >= 500) return -1;
    if (input === 1) return count;
    if (input % 2 === 0) {
      count++;
      return collatz(input / 2, count);
    } else if (input % 2 === 1) {
      count++;
      return collatz(input * 3 + 1, count);
    }
  };
  return collatz(num, 0);
}

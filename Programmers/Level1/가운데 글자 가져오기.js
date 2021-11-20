function solution(s) {
  let answers = "";
  let arr = s.split("");

  // s의 길이가 홀수 일때
  if (arr.length % 2 === 1) {
    answers = arr[(arr.length - 1) / 2];
  }
  // s의 길이가 짝수 일때
  else if (arr.length % 2 === 0) {
    answers = arr[arr.length / 2 - 1] + arr[arr.length / 2];
  }
  return answers;
}

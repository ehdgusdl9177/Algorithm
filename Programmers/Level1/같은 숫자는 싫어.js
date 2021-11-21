function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // 만약 현재 숫자와 다음 숫자가 같으면 건너뜀
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    // 같지 않으면 배열 변수에 push
    else if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

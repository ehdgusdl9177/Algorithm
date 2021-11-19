function solution(numbers) {
  let answers = 0;

  // 0~9 까지 모든 수의 합
  for (let i = 0; i < 10; i++) {
    answers += i;
  }

  // 0~9 까지 모든 수의 합에서 numbers의 값을 반복문을 통해 빼준다.
  for (let j = 0; j < numbers.length; j++) {
    answers -= numbers[j];
  }

  return answers;
}

// 0~9 까지의 모든 수의 합에서 numbers의 모든 수의 합을 빼주면 원하는 결과 값이 나온다.

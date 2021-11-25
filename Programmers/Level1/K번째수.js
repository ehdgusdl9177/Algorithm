function solution(array, commands) {
  let answer = [];
  let list = [];
  // commands의 길이 만큼 반복
  for (let i = 0; i < commands.length; i++) {
    // slice자르고 sort로 정렬
    list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });
    answer, push(list[commands[i][2] - 1]);
  }
  return answer;
}

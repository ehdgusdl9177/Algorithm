// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
  let answer = "";
  let arr = s.split("");
  // 홀수
  if (arr.length % 2 === 1) {
    answer = arr[(arr.length - 1) / 2];
  } else if (arr.length % 2 === 0) {
    answer = arr[arr.length / 2 - 1] + arr[arr.length / 2];
  }

  return answer;
}

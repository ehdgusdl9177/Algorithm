function solution(arr) {
  // arr의 길이가 1보다 작을 때 -1 리턴
  if (arr.length <= 1) return [-1];
  // arr 배열 복사
  let temp = arr.slice();
  // 복사한 배열 오름차순 정렬
  temp.sort((a, b) => a - b);
  let val = temp[0];
  // splice로 제일 작은 수 제거 후 리턴
  arr.splice(arr.indexOf(val), 1);
  return arr;
}

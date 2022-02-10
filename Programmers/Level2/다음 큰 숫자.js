function solution(n) {
  const oneNum = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === oneNum) return n;
  }
}

/*
while문을 돌며 n을 1씩 키우고,. 2진수로 바뀐 문자열에서 1의 갯수를 비교하여 같으면 반환
*/

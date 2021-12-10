function solution(phone_number) {
  let phoneLen = phone_number.length;
  let answer = "";
  for (let i = 0; i < phoneLen; i++) {
    if (i < phoneLen - 4) {
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}

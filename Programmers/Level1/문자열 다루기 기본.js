function solution(s) {
  // isNaN(): 어떤 값이 NaN인지 판별하는 함수
  if (!(s.length === 4 || s.length === 6)) return false;
  else {
    let strS = s.split("");
    for (let i = 0; i < strS.length; i++) {
      if (isNaN(strS[i])) return false;
    }
  }
  return true;
}

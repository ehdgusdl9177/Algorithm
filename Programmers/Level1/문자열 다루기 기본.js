function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  else {
    let strS = s.split("");
    for (let i = 0; i < strS.length; i++) {
      if (isNaN(strS[i])) return false;
    }
  }
  return true;
}

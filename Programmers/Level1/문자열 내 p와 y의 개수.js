function solution(s) {
  let strS = s.toLowerCase().split("");
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < strS.length; i++) {
    if (strS[i] === "p") {
      countP++;
    } else if (strS[i] === "y") {
      countY++;
    }
  }
  if (countP === countY) return true;
  else return false;
}

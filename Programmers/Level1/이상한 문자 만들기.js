function solution(s) {
  // 문자열을 쪼갠 후 매핑
  let strArr = s.split(" ");
  return strArr
    .map((el) => {
      let str = "";
      for (let i = 0; i < el.length; i++) {
        if (i % 2 === 0) {
          str += el[i].toUpperCase();
        } else {
          str += el[i].toLowerCase();
        }
      }
      return str;
    })
    .join(" ");
}

function convertDoubleSpaceToSingle(str) {
  let newStr = str.split(" ");
  let result = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > 0) {
      result = `${result} ${newStr[i]}`;
    }
  }
  return result.slice(1);
}

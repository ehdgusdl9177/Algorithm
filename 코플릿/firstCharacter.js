function firstCharacter(str) {
  if (str === "") {
    return "";
  }

  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i += 1) {
    result = result + words[i][0];
  }
  return result;
}

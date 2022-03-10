function powerOfTwo(num) {
  let sum = 1;
  while (sum < num) {
    sum = sum * 2;
  }
  return sum === num;
}

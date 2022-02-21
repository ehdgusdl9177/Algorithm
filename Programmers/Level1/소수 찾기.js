function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
